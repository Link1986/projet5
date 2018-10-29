<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Todo;
use App\Form\TodoType;
use App\Entity\Bookmarks;
use App\Form\BookmarksType;
use App\Entity\Project;
use App\Form\ProjectType;

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

                    $em = $this->getDoctrine()->getManager();
                    $todo->setUser($this->get('security.token_storage')->getToken()->getUser()->getId());
                    $todo->setList($addAjax);
                    $todo->setChecked(false);
                    $em->persist($todo);
                    $em->flush();

                }

                if($request->request->get('modifyAjax')){

                    $modifyAjax = $request->request->get('modifyAjax');
                    $modifyAjaxId = $request->request->get('modifyAjaxId');

                    if ($modifyAjax !== "") {
                        $modifyAjax = $request->request->get('modifyAjax');
                    }

                    $em = $this->getDoctrine()->getManager();
                    $todo = $em->getRepository('App\Entity\Todo')->find(intval($modifyAjaxId));
                    $todo->setList($modifyAjax);
                    $em->flush();

                }

                if($request->request->get('suppressAjax')){

                    $suppressAjax = $request->request->get('suppressAjax');

                    $em = $this->getDoctrine()->getManager();
                    $todo = $em->getRepository('App\Entity\Todo')->find(intval($suppressAjax));
                    $em->remove($todo);
                    $em->flush();

                }

                if($request->request->get('checkedAjax')){

                    $valAjax = $request->request->get('valAjax');
                    $checkedAjax = false;
                    if (isset($checkedAjax)) {
                        $checkedAjax = $request->request->get('checkedAjax');
                    }

                    $em = $this->getDoctrine()->getManager();
                    $todo = $em->getRepository('App\Entity\Todo')->find(intval($valAjax));
                    $todo->setChecked(filter_var( $checkedAjax, FILTER_VALIDATE_BOOLEAN));
                    $em->flush();

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

                    $em = $this->getDoctrine()->getManager();
                    $bookmarks->setUserBook($this->get('security.token_storage')->getToken()->getUser()->getId());
                    $bookmarks->setUrl($addBookmarks);
                    $em->persist($bookmarks);
                    $em->flush();

                }

                if($request->request->get('modifyBookmarks')){

                    $modifyBookmarks = $request->request->get('modifyBookmarks');
                    $modifyIdBookmarks = $request->request->get('modifyIdBookmarks');

                    if ($modifyBookmarks !== "") {
                        $modifyBookmarks = $request->request->get('modifyBookmarks');
                    }

                    $em = $this->getDoctrine()->getManager();
                    $bookmarks = $em->getRepository('App\Entity\Bookmarks')->find(intval($modifyIdBookmarks));
                    $bookmarks->setUrl($modifyBookmarks);
                    $em->flush();

                }

                if($request->request->get('suppressBookmarks')){

                    $suppressBookmarks = $request->request->get('suppressBookmarks');

                    $em = $this->getDoctrine()->getManager();
                    $bookmarks = $em->getRepository('App\Entity\Bookmarks')->find(intval($suppressBookmarks));
                    $em->remove($bookmarks);
                    $em->flush();

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

}


