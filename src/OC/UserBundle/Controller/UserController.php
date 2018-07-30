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

    public function adminAction()
    {
        if (!$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {

            return $this->redirect($this->generateUrl('oc_project_home'));
        }

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Todo')
        ;

        $listAdverts = $repository->myFindAll();

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Bookmarks')
        ;

        $listUrls = $repository->myFindAll();

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCProjectBundle:Projet')
        ;

        $listProjet = $repository->myFindAll();

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('OCUserBundle:User')
        ;

        $listUser = $repository->myFindAll();

        return $this->render('OCUserBundle:User:admin.html.twig', array(
            'listAdverts' => $listAdverts,
            'listUrls' => $listUrls,
            'listProjet' => $listProjet,
            'listUser' => $listUser
        ));

    }

}