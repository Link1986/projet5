<?php

namespace OC\ProjectBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Ajax
 *
 * @ORM\Table(name="oc_ajax")
 * @ORM\Entity(repositoryClass="OC\ProjectBundle\Repository\AjaxRepository")
 */
class Ajax
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
     * @var bool
     *
     * @ORM\Column(name="checked", type="boolean")
     */
    private $checked;


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
     * Set checked
     *
     * @param boolean $checked
     *
     * @return Ajax
     */
    public function setChecked($checked)
    {
        $this->checked = $checked;

        return $this;
    }

    /**
     * Get checked
     *
     * @return bool
     */
    public function getChecked()
    {
        return $this->checked;
    }
}

