<?php

namespace OC\ProjectBundle\Controller;

use OC\ProjectBundle\Entity\Todo;
use OC\ProjectBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use OC\ProjectBundle\Form\UserType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class AdvertController extends Controller
{
    public function indexAction()
    {
        return $this->render('OCProjectBundle:Advert:index.html.twig');
    }

    public function memberAction()
    {
        return $this->render('OCProjectBundle:Advert:member.html.twig');
    }

    public function viewAction($id)
    {
        return $this->render('OCProjectBundle:Advert:view.html.twig', array('id' => $id));
    }

    public function addAction(Request $request)
    {

        $todo = new Todo();

        $form = $this->get('form.factory')->createBuilder(FormType::class, $todo)
            ->add('list',      TextType::class)
            ->add('ajouter',      SubmitType::class)
            ->getForm()
        ;

        // Si la requête est en POST
        if ($request->isMethod('POST')) {
            // On fait le lien Requête <-> Formulaire
            // À partir de maintenant, la variable $advert contient les valeurs entrées dans le formulaire par le visiteur
            $form->handleRequest($request);

            // On vérifie que les valeurs entrées sont correctes
            // (Nous verrons la validation des objets en détail dans le prochain chapitre)
            if ($form->isValid()) {
                // On enregistre notre objet $advert dans la base de données, par exemple
                $em = $this->getDoctrine()->getManager();
                $em->persist($todo);
                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');



                // On redirige vers la page de visualisation de l'annonce nouvellement créée
                return $this->redirectToRoute('oc_project_add', array('id' => $todo->getId()));
            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listAdverts = $repository->myFindAll();

        // On passe la méthode createView() du formulaire à la vue
        // afin qu'elle puisse afficher le formulaire toute seule
        return $this->render('OCProjectBundle:Advert:add.html.twig', array(
            'form' => $form->createView(),
            'listAdverts' => $listAdverts
        ));
    }

    public function editAction(Request $request, Todo $todo)
    {
        $form = $this->get('form.factory')->createBuilder(FormType::class, $todo)
            ->add('list',      TextType::class)
            ->add('ajouter',      SubmitType::class)
            ->getForm()
        ;

        // Si la requête est en POST
        if ($request->isMethod('POST')) {
            // On fait le lien Requête <-> Formulaire
            // À partir de maintenant, la variable $advert contient les valeurs entrées dans le formulaire par le visiteur
            $form->handleRequest($request);

            // On vérifie que les valeurs entrées sont correctes
            // (Nous verrons la validation des objets en détail dans le prochain chapitre)
            if ($form->isValid()) {
                // On enregistre notre objet $advert dans la base de données, par exemple
                $em = $this->getDoctrine()->getManager();

                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');




            }
        }


        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listAdverts = $repository->myFindAll();

        // On passe la méthode createView() du formulaire à la vue
        // afin qu'elle puisse afficher le formulaire toute seule
        return $this->render('OCProjectBundle:Advert:edit.html.twig', array(
            'form' => $form->createView(),
            'listAdverts' => $listAdverts
        ));


    }

    public function deleteAction(Todo $todo)
    {
        $em = $this
            ->getDoctrine()
            ->getManager();
        $em->remove($todo);
        $em->flush();

        return new Response('élément supprimé');
    }
}