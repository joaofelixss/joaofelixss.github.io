<?php
    include_once("templates/header.php");

    if(isset($_GET['id'])){

        $postId = $_GET['id'];
        $currentPost;

        foreach($posts as $post){
            if($post['id'] == $postId){
                $currentPost = $post;
            }
        }

    }

?>
    <main id="post-contanier">
        <div class="content-contanier">
            <h1 id="main-title"><?= $currentPost['title']?></h1>
            <p id="post-description"><?= $currentPost['description']?></p>
             <div class="img-contanier">
                <img src="<?= $BASE_URL ?>/img/<?= $currentPost['img'] ?>" alt="<?= $currentPost['title']?>">
             </div>
            <p class="post-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Quos veniam perferendis excepturi esse? 
                 Iste suscipit facilis, sunt nulla saepe voluptatibus animi, 
                 nihil numquam qui officia molestias libero sint recusandae eius!*5</p>
            <p class="post-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Quos veniam perferendis excepturi esse? 
                 Iste suscipit facilis, sunt nulla saepe voluptatibus animi, 
                 nihil numquam qui officia molestias libero sint recusandae eius!*5</p>
        </div>
        <aside id="nav-contanier">
        <h3 id="tags-title">Tags</h3>
        <ul class="tag-list">
            <?php foreach($currentPost['tags'] as $tag): ?>
                 <li><a href="#"><?= $tag ?></a></li>
            <?php endforeach;?>
         </ul>
         <h3 id="categories-title">Categorias</h3>
         <ul id="categories-list">
            <?php foreach($categories as $category): ?>
                <li><a href="#"><?= $category ?></a></li>
            <?php endforeach;?>
         </ul>
    </aside>
    </main>
 <?php
    include_once("templates/footer.php")
?>