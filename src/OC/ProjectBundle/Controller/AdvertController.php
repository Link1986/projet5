<?php

namespace OC\ProjectBundle\Controller;

use OC\ProjectBundle\Entity\Todo;
use OC\UserBundle\Entity\User;
use OC\ProjectBundle\Entity\Bookmarks;
use OC\ProjectBundle\Entity\Projet;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use OC\ProjectBundle\Form\UserType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class AdvertController extends Controller
{
    public function indexAction()
    {
        return $this->render('OCProjectBundle:Advert:index.html.twig');
    }

    public function memberAction(Request $request)
    {
        $todo = new Todo();

        $form = $this->get('form.factory')->createBuilder(FormType::class, $todo)
            ->add('list',      TextType::class)
            ->add('ajouter',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();
                $em->persist($todo);
                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

                return $this->redirectToRoute('oc_project_member', array('id' => $todo->getId()));
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
        return $this->render('OCProjectBundle:Advert:member.html.twig', array(
            'form' => $form->createView(),
            'listAdverts' => $listAdverts
        ));
    }

    public function todoAction( Request $request)
    {
        $todo = new Todo();

        $form = $this->get('form.factory')->createBuilder(FormType::class, $todo)
            ->add('list',      TextType::class)
            ->add('ajouter',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();
                $todo->setUser($this->get('security.token_storage')->getToken()->getUser()->getId());
                $em->persist($todo);
                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

                return $this->redirectToRoute('oc_project_todo');
            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listAdverts = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        return $this->render('OCProjectBundle:Advert:todo.html.twig', array(
            'form' => $form->createView(),
            'listAdverts' => $listAdverts
        ));
    }

    public function checkAction(Request $request, Todo $todo)
    {
        $form = $this->get('form.factory')->createBuilder(FormType::class, $todo)
            ->add('checked', CheckboxType::class, array('required' => false, 'label' => 'Cocher/Décocher') )
            ->add('cocher',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();

                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

                return $this->redirectToRoute('oc_project_todo');

            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listAdverts = $repository->myFindAll();

        return $this->render('OCProjectBundle:Advert:check.html.twig', array(
            'form' => $form->createView(),
            'listAdverts' => $listAdverts,
        ));
    }

    public function editAction(Request $request, Todo $todo)
    {
        $form = $this->get('form.factory')->createBuilder(FormType::class, $todo)
            ->add('list',      TextType::class)
            ->add('modifier',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();

                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

                return $this->redirectToRoute('oc_project_todo');

            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listAdverts = $repository->myFindAll();

        return $this->render('OCProjectBundle:Advert:edit.html.twig', array(
            'form' => $form->createView(),
            'listAdverts' => $listAdverts,
        ));
    }

    public function deleteAction(Request $request, Todo $todo)
    {
        $form = $this->get('form.factory')->createBuilder(FormType::class, $todo)
            ->add('list',      TextType::class)
            ->add('supprimer',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();
                $em->remove($todo);
                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien supprimée.');

                return $this->redirectToRoute('oc_project_todo');
            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listAdverts = $repository->myFindAll();

        return $this->render('OCProjectBundle:Advert:delete.html.twig', array(
            'form' => $form->createView(),
            'listAdverts' => $listAdverts,
        ));
    }

    public function bookmarksAction(Request $request)
    {
        $bookmarks = new Bookmarks();

        $form = $this->get('form.factory')->createBuilder(FormType::class, $bookmarks)
            ->add('url',      TextType::class)
            ->add('ajouter',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();
                $bookmarks->setUserBook($this->get('security.token_storage')->getToken()->getUser()->getId());
                $em->persist($bookmarks);
                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

                return $this->redirectToRoute('oc_project_bookmarks');
            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Bookmarks')
        ;

        $listUrls = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        return $this->render('OCProjectBundle:Advert:bookmarks.html.twig', array(
            'form' => $form->createView(),
            'listUrls' => $listUrls
        ));
    }

    public function modifyAction(Request $request, Bookmarks $bookmarks)
    {
        $form = $this->get('form.factory')->createBuilder(FormType::class, $bookmarks)
            ->add('url',      TextType::class)
            ->add('modifier',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();

                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

                return $this->redirectToRoute('oc_project_bookmarks');
            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Bookmarks')
        ;

        $listAdverts = $repository->myFindAll();

        return $this->render('OCProjectBundle:Advert:modify.html.twig', array(
            'form' => $form->createView(),
            'listAdverts' => $listAdverts,
        ));
    }

    public function suppressAction(Request $request, Bookmarks $bookmarks)
    {
        $form = $this->get('form.factory')->createBuilder(FormType::class, $bookmarks)
            ->add('url',      TextType::class)
            ->add('supprimer',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();
                $em->remove($bookmarks);
                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien supprimée.');

                return $this->redirectToRoute('oc_project_bookmarks');
            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Bookmarks')
        ;

        $listAdverts = $repository->myFindAll();

        return $this->render('OCProjectBundle:Advert:suppress.html.twig', array(
            'form' => $form->createView(),
            'listAdverts' => $listAdverts,
        ));
    }

    public function projetAction(Request $request)
    {
        $projet = new Projet();

        $form = $this->get('form.factory')->createBuilder(FormType::class, $projet)
            ->add('title',     TextType::class)
            ->add('content',   TextareaType::class)
            ->add('ajouter',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();
                $projet->setUserProjet($this->get('security.token_storage')->getToken()->getUser()->getId());
                $em->persist($projet);
                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

                return $this->redirectToRoute('oc_project_list');
            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Projet')
        ;

        $listProjet = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        return $this->render('OCProjectBundle:Advert:projet.html.twig', array(
            'form' => $form->createView(),
            'listProjet' => $listProjet
        ));
    }

    public function listAction()
    {
        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Projet')
        ;

        $listProjet = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        return $this->render('OCProjectBundle:Advert:list.html.twig', array(
            'listProjet' => $listProjet
        ));
    }

    public function changeAction(Request $request, Projet $projet)
    {
        $form = $this->get('form.factory')->createBuilder(FormType::class, $projet)
            ->add('title',     TextType::class)
            ->add('content',   TextareaType::class)
            ->add('modifier',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();

                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

                return $this->redirectToRoute('oc_project_list');
            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Projet')
        ;

        $listProjet = $repository->myFindAll();

        return $this->render('OCProjectBundle:Advert:change.html.twig', array(
            'form' => $form->createView(),
            'listProjet' => $listProjet,
        ));
    }

    public function eraseAction(Request $request, Projet $projet)
    {
        $form = $this->get('form.factory')->createBuilder(FormType::class, $projet)
            ->add('title',     TextType::class)
            ->add('content',   TextareaType::class)
            ->add('supprimer',      SubmitType::class)
            ->getForm()
        ;

        if ($request->isMethod('POST')) {

            $form->handleRequest($request);

            if ($form->isValid()) {

                $em = $this->getDoctrine()->getManager();
                $em->remove($projet);
                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien supprimée.');

                return $this->redirectToRoute('oc_project_list');
            }
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Projet')
        ;

        $listProjet = $repository->myFindAll();

        return $this->render('OCProjectBundle:Advert:erase.html.twig', array(
            'form' => $form->createView(),
            'listProjet' => $listProjet,
        ));
    }

    public function profilAction()
    {
        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listAdverts = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Bookmarks')
        ;

        $listUrls = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Projet')
        ;

        $listProjet = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        return $this->render('OCProjectBundle:Advert:profil.html.twig', array(
            'listAdverts' => $listAdverts,
            'listUrls' => $listUrls,
            'listProjet' => $listProjet
        ));
    }

    public function suppressAccountAction()
    {
        return $this->render('OCProjectBundle:Advert:suppressaccount.html.twig');
    }

}