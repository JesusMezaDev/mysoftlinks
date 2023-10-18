<template>
    <div class="m-3">
        <div class="row">
            <div class="col">
                <section class="text-center">
                    <header>
                        <span class="bi-patch-exclamation"></span>
                    </header>
                    <p>
                        Oops! no se encuentra el elemento, intenta ingresando una URL válida.
                    </p>
                    <button class="btn btn-primary" id="btnHome">
                        <i class="bi-house"></i>
                        Inicio
                    </button>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const handleClick = (e: Event) => {
        e.preventDefault();
        router.push('/');
    }

    onMounted(() => {
        const homeButton = document.querySelector('#btnHome') as HTMLButtonElement;
        homeButton.addEventListener('click', handleClick);
    });
</script>

<style scoped>
    span {
        font-size: 64px;
    }

    p {
        font-size: 28px;
    }
</style>