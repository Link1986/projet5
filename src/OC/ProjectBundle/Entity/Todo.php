<?php

namespace OC\ProjectBundle\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * Todo
 *
 * @ORM\Table(name="oc_todo")
 * @ORM\Entity(repositoryClass="OC\ProjectBundle\Repository\TodoRepository")
 */
class Todo
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
     * @ORM\Column(name="list", type="string", length=255)
     */
    private $list;

    /**
     * @var int
     *
     * @ORM\Column(name="user_id", type="integer")
     * @ORM\ManyToOne(targetEntity="OC\UserBundle\Entity\User")
     * @ORM\JoinColumn(nullable=false)
     */
    protected $user;

    /**
     * @ORM\Column(name="checked", type="boolean")
     */
    private $checked = false;


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
     * Set list
     *
     * @param string $list
     *
     * @return Todo
     */
    public function setList($list)
    {
        $this->list = $list;

        return $this;
    }

    /**
     * Get list
     *
     * @return string
     */
    public function getList()
    {
        return $this->list;
    }

    /**
     * Set user
     *
     * @param integer $user
     *
     * @return Todo
     */
    public function setUser($user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return integer
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set checked
     *
     * @param boolean $checked
     *
     * @return Todo
     */
    public function setChecked($checked)
    {
        $this->checked = $checked;

        return $this;
    }

    /**
     * Get checked
     *
     * @return boolean
     */
    public function getChecked()
    {
        return $this->checked;
    }
}
