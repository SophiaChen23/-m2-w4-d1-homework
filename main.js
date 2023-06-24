Vue.component('navigation', {
    template: `
    <nav>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Recipes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Lifestyles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Videos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
    </nav>
  `
});
new Vue({
    el: '#app',
    data: {
        comments: [
            {
                id: 1,
                author: 'Brianna',
                date: 'February 18, 2021 @ 3:30 pm',
                content: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!'
            },
            {
                id: 2,
                author: 'LINH',
                date: 'February 15, 2021 @ 9:46 am',
                content: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!'
            },
            {
                id: 3,
                author: 'CATHERINE LEONARDO',
                date: 'February 13, 2021 @ 12:58 pm',
                content: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.'
            },
            {
                id: 4,
                author: 'KALI',
                date: 'February 13, 2021 @ 11:31 am',
                content: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darnt was hoping to have some for leftovers haha). This is a crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!'
            }
        ],
        imageSource: 'images/chili.jpg',
        showPopup: false,
        currentAuthor: {
            author: '',
            level: '',
            bio: ''
        },
    },
    methods: {
        getProfileImage(author) {

            return 'images/profile.png';
        },
        showProfilePopup(comment) {
            this.currentAuthor.author = comment.author;
            this.currentAuthor.level = this.getAuthorLevel(comment.author);
            this.currentAuthor.bio = this.getAuthorBio(comment.author);

            this.showPopup = true;
        },
        closeProfilePopup() {
            this.showPopup = false;
        },
        getAuthorLevel(author) {
            switch (author.toLowerCase()) {
                case 'brianna':
                    return 'Foodie Level: Novice';
                case 'linh':
                    return 'Foodie Level: Newcomer';
                case 'catherine leonardo':
                    return 'Foodie Level: Mentor';
                case 'kali':
                    return 'Foodie Level: Novice';
                default:
                    return 'Foodie Level: Unknown';
            }
        },
        getAuthorBio(author) {
            switch (author.toLowerCase()) {
                case 'brianna':
                    return 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!';
                case 'linh':
                    return 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.';
                case 'catherine leonardo':
                    return 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!';
                case 'kali':
                    return "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!";
                default:
                    return 'No bio available for this author.';
            }
        }

    },
});
