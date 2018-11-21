<?php

namespace OC\UserBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\DependencyInjection\ContainerInterface as Container;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\UserBundle\Doctrine\UserManager;
use OC\UserBundle\Entity\User as User;

class UserController extends Controller
{
    public function userDeleteAction(User $user)
    {
        $userManager = $this->container->get('fos_user.user_manager');
        $userManager->deleteUser($user);

        return $this->redirect($this->generateUrl('oc_project_home'));

    }

    public function adminAction(Request $request)
    {
        if (!$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {

            return $this->redirect($this->generateUrl('oc_project_home'));
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listAllTodo = $repository->myFindAll();

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Bookmarks')
        ;

        $listAllUrls = $repository->myFindAll();

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Projet')
        ;

        $listAllProject = $repository->myFindAll();

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCUserBundle:User')
        ;

        $listUser = $repository->myFindAll();

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

        return $this->render('OCUserBundle:User:admin.html.twig', [
            'listAllTodo' => $listAllTodo,
            'listAllUrls' => $listAllUrls,
            'listAllProject' => $listAllProject,
            'listUser' => $listUser
        ]);

    }

}