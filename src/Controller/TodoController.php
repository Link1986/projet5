<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use App\Entity\Todo;
use App\Form\TodoType;
use App\Entity\Bookmarks;
use App\Form\BookmarksType;
use App\Entity\Project;
use App\Form\ProjectType;
use App\Entity\User;

class TodoController extends AbstractController
{

    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('todo/index.html.twig', [
            'controller_name' => 'TodoController',
        ]);
    }

    /**
 * @Route("/member", name="member")
 */
    public function member()
    {
        return $this->render('todo/member.html.twig', [
            'controller_name' => 'TodoController',
        ]);
    }

    /**
     * @Route("/member/todo", name="todo")
     */
    public function todo(Request $request)
    {
        $todo = new Todo();

        $form = $this->createForm(TodoType::class, $todo);

        $form->handleRequest($request);

            if($request->isXmlHttpRequest()) {

                if ($request->request->get('addAjax')) {

                    $todo = new Todo();
                    $addAjax = $request->request->get('addAjax');


                    if ($addAjax !== "") {
                        $addAjax = $request->request->get('addAjax');
                    }

                    $manager = $this->getDoctrine()->getManager();
                    $todo->setUser($this->get('security.token_storage')->getToken()->getUser()->getId());
                    $todo->setList($addAjax);
                    $todo->setChecked(false);
                    $manager->persist($todo);
                    $manager->flush();

                }

                if($request->request->get('modifyAjax')){

                    $modifyAjax = $request->request->get('modifyAjax');
                    $modifyAjaxId = $request->request->get('modifyAjaxId');

                    if ($modifyAjax !== "") {
                        $modifyAjax = $request->request->get('modifyAjax');
                    }

                    $manager = $this->getDoctrine()->getManager();
                    $todo = $manager->getRepository('App\Entity\Todo')->find(intval($modifyAjaxId));
                    $todo->setList($modifyAjax);
                    $manager->flush();

                }

                if($request->request->get('suppressAjax')){

                    $suppressAjax = $request->request->get('suppressAjax');

                    $manager = $this->getDoctrine()->getManager();
                    $todo = $manager->getRepository('App\Entity\Todo')->find(intval($suppressAjax));
                    $manager->remove($todo);
                    $manager->flush();

                }

                if($request->request->get('checkedAjax')){

                    $valAjax = $request->request->get('valAjax');
                    $checkedAjax = false;
                    if (isset($checkedAjax)) {
                        $checkedAjax = $request->request->get('checkedAjax');
                    }

                    $manager = $this->getDoctrine()->getManager();
                    $todo = $manager->getRepository('App\Entity\Todo')->find(intval($valAjax));
                    $todo->setChecked(filter_var( $checkedAjax, FILTER_VALIDATE_BOOLEAN));
                    $manager->flush();

                }

            }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Todo')
        ;

        $listTodo = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Todo')
        ;

        $listAllTodo = $repository->myFindAll();

        return $this->render('todo/todo.html.twig', [
            'controller_name' => 'TodoController',
            'todoForm' => $form->createView(),
            'listTodo' => $listTodo,
            'listAllTodo' => $listAllTodo
        ]);
    }

    /**
     * @Route("/member/bookmarks", name="bookmarks")
     */
    public function bookmarks(Request $request)
    {
        $bookmarks = new Bookmarks();

        $form = $this->createForm(BookmarksType::class, $bookmarks);

        $form->handleRequest($request);

            if($request->isXmlHttpRequest()) {

                if ($request->request->get('addBookmarks')) {

                    $bookmarks = new Bookmarks();
                    $addBookmarks = $request->request->get('addBookmarks');


                    if ($addBookmarks !== "") {
                        $addBookmarks = $request->request->get('addBookmarks');
                    }

                    $manager = $this->getDoctrine()->getManager();
                    $bookmarks->setUserBook($this->get('security.token_storage')->getToken()->getUser()->getId());
                    $bookmarks->setUrl($addBookmarks);
                    $manager->persist($bookmarks);
                    $manager->flush();

                }

                if($request->request->get('modifyBookmarks')){

                    $modifyBookmarks = $request->request->get('modifyBookmarks');
                    $modifyIdBookmarks = $request->request->get('modifyIdBookmarks');

                    if ($modifyBookmarks !== "") {
                        $modifyBookmarks = $request->request->get('modifyBookmarks');
                    }

                    $manager = $this->getDoctrine()->getManager();
                    $bookmarks = $manager->getRepository('App\Entity\Bookmarks')->find(intval($modifyIdBookmarks));
                    $bookmarks->setUrl($modifyBookmarks);
                    $manager->flush();

                }

                if($request->request->get('suppressBookmarks')){

                    $suppressBookmarks = $request->request->get('suppressBookmarks');

                    $manager = $this->getDoctrine()->getManager();
                    $bookmarks = $manager->getRepository('App\Entity\Bookmarks')->find(intval($suppressBookmarks));
                    $manager->remove($bookmarks);
                    $manager->flush();

                }

            }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Bookmarks')
        ;

        $listUrls = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Bookmarks')
        ;

        $listAllUrls = $repository->myFindAll();

        return $this->render('todo/bookmarks.html.twig', [
            'controller_name' => 'TodoController',
            'bookmarksForm' => $form->createView(),
            'listUrls' => $listUrls,
            'listAllUrls' => $listAllUrls
        ]);
    }

    /**
     * @Route("/member/project", name="project")
     */
    public function project(Request $request)
    {
        $project = new Project();

        $form = $this->createForm(ProjectType::class, $project);

        $form->handleRequest($request);

            if($request->isXmlHttpRequest()) {

                if ($request->request->get('addTitle')) {

                    $project = new Project();

                    $addTitle = $request->request->get('addTitle');
                    $addContent = $request->request->get('addContent');

                    if ($addTitle !== "" && $addContent !== "") {
                        $addTitle = $request->request->get('addTitle');
                        $addContent = $request->request->get('addContent');
                    }

                    $manager = $this->getDoctrine()->getManager();
                    $project->setUserProject($this->get('security.token_storage')->getToken()->getUser()->getId());
                    $project->setTitle($addTitle);
                    $project->setContent($addContent);
                    $manager->persist($project);
                    $manager->flush();

                }

                if($request->request->get('modifyTitleProject')){

                    $modifyTitleProject = $request->request->get('modifyTitleProject');
                    $modifyContentProject = $request->request->get('modifyContentProject');
                    $modifyIdProject = $request->request->get('modifyIdProject');

                    if ($modifyTitleProject !== "" && $modifyContentProject !== "") {
                        $modifyTitleProject = $request->request->get('modifyTitleProject');
                        $modifyContentProject = $request->request->get('modifyContentProject');
                    }

                    $manager = $this->getDoctrine()->getManager();
                    $project = $manager->getRepository('App\Entity\Project')->find(intval($modifyIdProject));
                    $project->setTitle($modifyTitleProject);
                    $project->setContent($modifyContentProject);
                    $manager->flush();

                }

                if($request->request->get('suppressProject')){

                    $suppressProject = $request->request->get('suppressProject');

                    $manager = $this->getDoctrine()->getManager();
                    $project = $manager->getRepository('App\Entity\Project')->find(intval($suppressProject));
                    $manager->remove($project);
                    $manager->flush();

                }

            }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Project')
        ;

        $listProject = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Project')
        ;

        $listAllProject = $repository->myFindAll();

        return $this->render('todo/project.html.twig', [
            'controller_name' => 'TodoController',
            'projectForm' => $form->createView(),
            'listProject' => $listProject,
            'listAllProject' => $listAllProject
        ]);
    }

    /**
     * @Route("/member/profile", name="profile")
     */
    public function profile(Request $request)
    {

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Todo')
        ;

        $listTodo = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Bookmarks')
        ;

        $listUrls = $repository->FindByUser($this->get('security.token_storage')->getToken()->getUser()->getId());

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Project')
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
                $profile = $manager->getRepository('App\Entity\User')->find(intval($modifyIdProfile));
                $profile->setUsername($modifyUsername);
                $profile->setEmail($modifyEmail);
                $manager->flush();

            }
        }

        return $this->render('todo/profile.html.twig', [
            'controller_name' => 'TodoController',
            'listTodo' => $listTodo,
            'listUrls' => $listUrls,
            'listProject' => $listProject
        ]);
    }

    /**
     * @Route("member/profile/suppress_account", name="suppress_account")
     */
    public function suppressAccount()
    {
        return $this->render('todo/suppressAccount.html.twig', [
            'controller_name' => 'TodoController'
        ]);
    }

}


