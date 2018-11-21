<?php

namespace OC\ProjectBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Bookmarks
 *
 * @ORM\Table(name="oc_bookmarks")
 * @ORM\Entity(repositoryClass="OC\ProjectBundle\Repository\BookmarksRepository")
 */
class Bookmarks
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="url", type="string", length=255)
     */
    private $url;

    /**
     * @var int
     *
     * @ORM\Column(name="user_book", type="integer")
     * @ORM\ManyToOne(targetEntity="OC\UserBundle\Entity\User")
     * @ORM\JoinColumn(nullable=false)
     */
    protected $userBook;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set url
     *
     * @param string $url
     *
     * @return Bookmarks
     */
    public function setUrl($url)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Get url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Set userBook
     *
     * @param integer $userBook
     *
     * @return Bookmarks
     */
    public function setUserBook($userBook)
    {
        $this->userBook = $userBook;

        return $this;
    }

    /**
     * Get userBook
     *
     * @return integer
     */
    public function getUserBook()
    {
        return $this->userBook;
    }
}
