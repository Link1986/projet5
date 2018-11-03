<?php

namespace App\Controller;

use App\Form\UserType;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\Session\Session;


class UserController extends AbstractController
{
    /**
     * @Route("/inscription", name="register")
     */
    public function register(Request $request, ObjectManager $manager, UserPasswordEncoderInterface $encoder)
    {
        $user = new User();

        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $passwordHash = $encoder->encodePassword($user, $user->getPassword());

            $user->setPassword($passwordHash);

            /*Create an USER*/
            $user->setRoles( array('ROLE_USER') );

            /*Create an ADMIN*/
            //Uncomment this role and comment the previous role
            /*$user->setRoles( array('ROLE_ADMIN') );*/

            $manager->persist($user);
            $manager->flush();

            return $this->redirectToRoute('login');
        }

        return $this->render('user/register.html.twig', [
            'controller_name' => 'UserController',
            'form' => $form->createView()
        ]);
    }

    /**
 * @Route("/connexion", name="login")
 */
    public function login()
    {
        return $this->render('user/login.html.twig', [
            'controller_name' => 'UserController'
        ]);
    }

    /**
     * @Route("/deconnexion", name="logout")
     */
    public function logout()
    {

    }

    /**
     * @Route("member/profile/user_delete/{id}", name="user_delete")
     */
    public function userDelete(Request $request, User $user)
    {

        $em = $this->getDoctrine()->getManager();
        $em->remove($user);
        $em->flush();

        $this->get('security.token_storage')->setToken(null);

        return $this->redirect($this->generateUrl('home'));

    }

    /**
     * @Route("/admin", name="admin")
     */
    public function adminDashboard(Request $request)
    {
        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Todo')
        ;

        $listAllTodo = $repository->myFindAll();

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Bookmarks')
        ;

        $listAllUrls = $repository->myFindAll();

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\Project')
        ;

        $listAllProject = $repository->myFindAll();

        $repository = $this
            ->getDoctrine()
            ->getManager()
            ->getRepository('App\Entity\User')
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

                $em = $this->getDoctrine()->getManager();
                $profile = $em->getRepository('App\Entity\User')->find(intval($modifyIdProfile));
                $profile->setUsername($modifyUsername);
                $profile->setEmail($modifyEmail);
                $em->flush();

            }
        }

        return $this->render('user/admin.html.twig', [
            'controller_name' => 'UserController',
            'listAllTodo' => $listAllTodo,
            'listAllUrls' => $listAllUrls,
            'listAllProject' => $listAllProject,
            'listUser' => $listUser
        ]);
    }

}
