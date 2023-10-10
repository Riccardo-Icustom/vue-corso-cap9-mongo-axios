/* ROUTING */
/*
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'
import TaskDetailView from '../views/TaskDetailView.vue'
import TaskDetailCommentsView from '../views/TaskDetailCommentsView.vue'
import TaskDetailGalleryView from '../views/TaskDetailGalleryView.vue'
import NotFoundView from '../views/NotFoundView.vue'
*/
const  HomeView = () => import('../views/HomeView.vue');
const  TasksView = () => import( '../views/TasksView.vue');
const  TaskDetailView = () => import( '../views/TaskDetailView.vue');
const  TaskDetailCommentsView = () => import( '../views/TaskDetailCommentsView.vue');
const  TaskDetailGalleryView = () => import( '../views/TaskDetailGalleryView.vue');
const  NotFoundView = () => import( '../views/NotFoundView.vue');

// 2. Define routes
const routes = [
    {
      path:'/', 
      component:HomeView,
      name:'home',
      title:'Home Page',
      isInNavigation:true
    },
    {
      path:'/tasks', 
      component:TasksView,
      name:'tasks',
      title:'Task Page',
      isInNavigation:true
    },{
      path:'/tasks/:id',
      component: TaskDetailView,
      name:'taskdetail',
      props: true,
      isInNavigation:false,

      children:[
          {
            path: 'comments', //match su /task/:id/comments 
            component: TaskDetailCommentsView,
            name:'taskdetailcomments',
            props:true
                  
          },{
            path: 'gallery', //match su /task/:id/gallery 
            component: TaskDetailGalleryView,
            name:'taskdetailgallery',
            props:true 

          }
      ]
    },
    {
      path:'/:pathmatch(.*)*',
      component: NotFoundView,
      name: 'notfound',
      title: 'Not Found Page',
      isInNavigation:false
    }
];

export default routes