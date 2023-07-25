<script>
import {store} from '../store'
export default{
    data(){
      return{
        store
      }
    },
    components: {

    }
}
</script>

<template>
  <footer>
      <div class="container-footer">
        <div class="row">
			<div class="col-25">
				<div class="logo">
					<img src="../assets/img/logo-footer-autocar11.png" alt="">
				</div>
				<ul>
					<li>
						<font-awesome-icon :icon="`fa-solid ${store.BusinessInfo.location.icon}`" />
						{{ store.BusinessInfo.location.text }}
					</li>
					<li>
						<font-awesome-icon :icon="`fa-solid ${store.BusinessInfo.contact.icon}`" />
						{{ store.BusinessInfo.contact.text }}
					</li>
					<li>
						<font-awesome-icon :icon="`fa-solid ${store.BusinessInfo.email.icon}`" />
						{{ store.BusinessInfo.email.text }}
					</li>
				</ul>
				<div class="socials">
					<font-awesome-icon icon="fa-brands fa-facebook-f" />
					<font-awesome-icon icon="fa-brands fa-twitter" />
					<font-awesome-icon icon="fa-brands fa-instagram" />
				</div>
			</div>
			<div class="col-auto">
				<h2 class="capitalize ">
					join our news letter
				</h2>
				<p class="">
					subscribe to out naskhfaksl
				</p>
				<input type="text" placeholder="your email address">
				<input type="text" placeholder="subsc &#8594" class="text-center">
			</div>
			<div class="col-25">
				<h2 class="capitalize">
					my account
				</h2>
				<ul>
					<li class="capitalize"
						v-for="(navLinks, i) in store.myAccountNav" :key="i">
						<a :href="navLinks.link">{{ navLinks.text }}</a>
					</li>
				</ul>
			</div>
			<div class="col-25">
				<h2 class="capitalize">
					quick links
				</h2>
				<li class="capitalize"
						v-for="(navLinks, i) in store.quickLinksNav" :key="i">
						<a :href="navLinks.link">{{ navLinks.text }}</a>
					</li>
			</div>
        </div>
      </div>
	  <div class="copyright text-center capitalize">
			&#169; 1880 - auto car - all rights reserved.
	  </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

footer{
  background-color: black;
  color: white;
  padding: 50px;
  .container-footer{
	max-width: 1200px;
	margin: auto
  }
  .col-25{
    @include debug-two;
	li{
		display: default;
		&::before{
			display: inline-block;
			content: "";
			border-top: 3px solid white;
			width: 10px;
			margin: 0 10px;
    		transform: translateY(-5px);
		}
	}
  }
  .col-auto{
    @include debug-one;
	input{
		width: 100%;
		// height: 40px;
		padding: 20px;
	}
  }
}
</style>