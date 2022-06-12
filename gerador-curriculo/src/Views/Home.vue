<template>
  <transition name="header">
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col-5">
          <div class="col-12 mt-5">
            <section>
              <h3 class="text-primary">Bem vindo(a) ao gerador de currículo</h3>
              <p class="text-secondary mt-3">Faça seu currículo de acordo com o modelo esperado por grandes empresas tech.</p>
              <router-link class="btn btn-outline-dark" to="/form-infos-pessoais">Seguir</router-link>
            </section>
          </div>
        </div>
        <div class="col-7">
          <div class="col-12">
            <img src="imgHome.jpg" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style>

</style>