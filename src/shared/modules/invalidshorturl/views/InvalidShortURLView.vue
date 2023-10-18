<template>
    <div class="m-3">
        <div class="row">
            <div class="col">
                <section class="text-center">
                    <header>
                        <span class="bi-file-earmark-x"></span>
                    </header>
                    <p>
                        Oops! la URL no es válida, intenta con otra.
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
        router.push({ name: 'home' });
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