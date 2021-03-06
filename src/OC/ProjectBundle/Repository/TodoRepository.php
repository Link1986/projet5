<?php

namespace OC\ProjectBundle\Repository;

/**
 * TodoRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class TodoRepository extends \Doctrine\ORM\EntityRepository
{
    public function myFindAll()
    {
        return $this
            ->createQueryBuilder('a')
            ->getQuery()
            ->getResult()
            ;
    }

    public function findByUser($user)
    {
        $qb = $this->createQueryBuilder('a');


        $qb->where('a.user = :user')
            ->setParameter('user', $user)
            ->setFirstResult(0)
            ->setMaxResults(10)
        ;

        return $qb
            ->getQuery()
            ->getResult()
            ;
    }
}
