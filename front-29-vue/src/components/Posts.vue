<template>
    <section class="posts">
            <h2 class="posts__title">Last posts</h2>
            <button class="more-button">all posts</button>
            <ul class="posts__list">
                <li class="posts__item" v-for="item in posts" v-bind:key="item">
                    <img class="posts__image" src="../assets/Picture.jpg" alt="Picture">
                    <div class="posts-wrapper">
                        <h3>{{item.title}}</h3>
                        <p class="posts__description">{{ item.description }}</p>
                        <p class="posts__date-wrapper" >
                            <span class="posts__date">{{ item.date }}</span>
                            <button class="more-button">Read more</button>
                        </p>
                        
                    </div>
                </li>
            </ul>
        </section>
</template>

  <script>
  export default {
    name: 'front-29-vue-posts',
    props: {
      msg: String
    },
    data (){
        return{
            posts:[
                {
                    title:'There are many reasons to get down',
                    description: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.',
                    date: '10	Oct 21', 
                },
                {
                    title:'Choosing The Right Path',
                    description: 'Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.',
                    date: '58	Oct 20', 
                },
                {
                    title:'Start your journey here',
                    description: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.',
                    date: '29	Oct 18', 
                }
            ]
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss">

  </style>
  