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
use Symfony\Component\HttpFoundation\JsonResponse;

class ProjectController extends Controller
{
    public function indexAction()
    {
        return $this->render('OCProjectBundle:Project:index.html.twig');
    }

    public function memberAction()
    {
        return $this->render('OCProjectBundle:Project:member.html.twig');
    }

    public function todoAction( Request $request)
    {
        $todo = new Todo();

        $form = $this->get('form.factory')->createBuilder(FormType::class, $todo)
            ->add('list',      TextType::class)
            ->add('submit',      SubmitType::class)
            ->getForm()
        ;

        if($request->isXmlHttpRequest()) {

            if ($request->request->get('addTodo')) {

                $todo = new Todo();
                $addTodo = $request->request->get('addTodo');


                if ($addTodo !== "") {
                    $addTodo = $request->request->get('addTodo');
                    $manager = $this->getDoctrine()->getManager();
                    $todo->setUser($this->get('security.token_storage')->getToken()->getUser()->getId());
                    $todo->setList($addTodo);
                    $todo->setChecked(false);
                    $manager->persist($todo);
                    $manager->flush();
                }

            }

            if($request->request->get('modifyTodo')){

                $modifyTodo = $request->request->get('modifyTodo');
                $modifyTodoId = $request->request->get('modifyTodoId');

                if ($modifyTodo !== "") {
                    $modifyTodo = $request->request->get('modifyTodo');
                    $manager = $this->getDoctrine()->getManager();
                    $todo = $manager->getRepository('OCProjectBundle:Todo')->find(intval($modifyTodoId));
                    $todo->setList($modifyTodo);
                    $manager->flush();
                }

            }

            if($request->request->get('suppressTodo')){

                $suppressTodo = $request->request->get('suppressTodo');

                $manager = $this->getDoctrine()->getManager();
                $todo = $manager->getRepository('OCProjectBundle:Todo')->find(intval($suppressTodo));
                $manager->remove($todo);
                $manager->flush();

            }

            if($request->request->get('checkedTodo')){

                $valTodo = $request->request->get('valTodo');

                    $checkedTodo = $request->request->get('checkedTodo');
                    $manager = $this->getDoctrine()->getManager();
                    $todo = $manager->getRepository('OCProjectBundle:Todo')->find(intval($valTodo));
                    $todo->setChecked(filter_var( $checkedTodo, FILTER_VALIDATE_BOOLEAN));
                    $manager->flush();

            }

        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listTodo = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listAllTodo = $repository->myFindAll();

        return $this->render('OCProjectBundle:Project:todo.html.twig', array(
            'todoForm' => $form->createView(),
            'listTodo' => $listTodo,
            'listAllTodo' => $listAllTodo
        ));

    }

    public function bookmarksAction(Request $request)
    {
        $bookmarks = new Bookmarks();

        $form = $this->get('form.factory')->createBuilder(FormType::class, $bookmarks)
            ->add('url',      TextType::class)
            ->add('submit',      SubmitType::class)
            ->getForm()
        ;

        if($request->isXmlHttpRequest()) {

            if ($request->request->get('addBookmarks')) {

                $bookmarks = new Bookmarks();
                $addBookmarks = $request->request->get('addBookmarks');


                if ($addBookmarks !== "") {
                    $addBookmarks = $request->request->get('addBookmarks');
                    $manager = $this->getDoctrine()->getManager();
                    $bookmarks->setUserBook($this->get('security.token_storage')->getToken()->getUser()->getId());
                    $bookmarks->setUrl($addBookmarks);
                    $manager->persist($bookmarks);
                    $manager->flush();
                }

            }

            if($request->request->get('modifyBookmarks')){

                $modifyBookmarks = $request->request->get('modifyBookmarks');

                if ($modifyBookmarks !== "") {
                    $modifyBookmarks = $request->request->get('modifyBookmarks');
                    $modifyIdBookmarks = $request->request->get('modifyIdBookmarks');
                    $manager = $this->getDoctrine()->getManager();
                    $bookmarks = $manager->getRepository('OCProjectBundle:Bookmarks')->find(intval($modifyIdBookmarks));
                    $bookmarks->setUrl($modifyBookmarks);
                    $manager->flush();
                }

            }

            if($request->request->get('suppressBookmarks')){

                $suppressBookmarks = $request->request->get('suppressBookmarks');

                $manager = $this->getDoctrine()->getManager();
                $bookmarks = $manager->getRepository('OCProjectBundle:Bookmarks')->find(intval($suppressBookmarks));
                $manager->remove($bookmarks);
                $manager->flush();

            }

        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Bookmarks')
        ;

        $listUrls = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Bookmarks')
        ;

        $listAllUrls = $repository->myFindAll();

        return $this->render('OCProjectBundle:Project:bookmarks.html.twig', [
            'bookmarksForm' => $form->createView(),
            'listUrls' => $listUrls,
            'listAllUrls' => $listAllUrls
        ]);

    }

    public function projetAction(Request $request)
    {
        $projet = new Projet();

        $form = $this->get('form.factory')->createBuilder(FormType::class, $projet)
            ->add('title',     TextType::class)
            ->add('content',   TextareaType::class)
            ->add('submit',      SubmitType::class)
            ->getForm()
        ;

        if($request->isXmlHttpRequest()) {

            if ($request->request->get('addTitle')) {

                $projet = new Projet();

                $addTitle = $request->request->get('addTitle');
                $addContent = $request->request->get('addContent');

                if ($addTitle !== "" && $addContent !== "") {
                    $addTitle = $request->request->get('addTitle');
                    $addContent = $request->request->get('addContent');
                    $manager = $this->getDoctrine()->getManager();
                    $projet->setUserProjet($this->get('security.token_storage')->getToken()->getUser()->getId());
                    $projet->setTitle($addTitle);
                    $projet->setContent($addContent);
                    $manager->persist($projet);
                    $manager->flush();
                }

            }

            if($request->request->get('modifyTitleProject')){

                $modifyTitleProject = $request->request->get('modifyTitleProject');
                $modifyContentProject = $request->request->get('modifyContentProject');

                if ($modifyTitleProject !== "" && $modifyContentProject !== "") {
                    $modifyIdProject = $request->request->get('modifyIdProject');
                    $modifyTitleProject = $request->request->get('modifyTitleProject');
                    $modifyContentProject = $request->request->get('modifyContentProject');
                    $manager = $this->getDoctrine()->getManager();
                    $projet = $manager->getRepository('OCProjectBundle:Projet')->find(intval($modifyIdProject));
                    $projet->setTitle($modifyTitleProject);
                    $projet->setContent($modifyContentProject);
                    $manager->flush();
                }

            }

            if($request->request->get('suppressProject')){

                $suppressProject = $request->request->get('suppressProject');

                $manager = $this->getDoctrine()->getManager();
                $projet = $manager->getRepository('OCProjectBundle:Projet')->find(intval($suppressProject));
                $manager->remove($projet);
                $manager->flush();

            }

        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Projet')
        ;

        $listProject = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Projet')
        ;

        $listAllProject = $repository->myFindAll();

        return $this->render('OCProjectBundle:Project:projet.html.twig', [
            'projectForm' => $form->createView(),
            'listProject' => $listProject,
            'listAllProject' => $listAllProject
        ]);

    }

    public function profilAction(Request $request)
    {
        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listTodo = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

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

        $listProject = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        if($request->isXmlHttpRequest()) {
            if($request->request->get('modifyUsername')){

                $modifyUsername = $request->request->get('modifyUsername');
                $modifyEmail = $request->request->get('modifyEmail');
                $modifyIdProfile = $request->request->get('modifyIdProfile');

                if ($modifyUsername !== "" && $modifyEmail !== "") {
                    $modifyUsername = $request->request->get('modifyUsername');
                    $modifyEmail = $request->request->get('modifyEmail');
                }

                $manager = $this->getDoctrine()->getManager();
                $profile = $manager->getRepository('OCUserBundle:User')->find(intval($modifyIdProfile));
                $profile->setUsername($modifyUsername);
                $profile->setEmail($modifyEmail);
                $manager->flush();

            }
        }

        return $this->render('OCProjectBundle:Project:profil.html.twig', [
            'listTodo' => $listTodo,
            'listUrls' => $listUrls,
            'listProject' => $listProject
        ]);

    }

    public function suppressAccountAction()
    {
        return $this->render('OCProjectBundle:Project:suppressaccount.html.twig');
    }

}