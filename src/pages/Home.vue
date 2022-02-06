<template>
  <div>
    <Header class="text-white sticky top-0 w-full z-10" />
    <main id="1" class="container px-4 mx-auto space-y-4 text-white">
      <section class="grid grid-cols-2 items-center h-screen">
        <div class="space-y-4">
          <p class="text-5xl">
            My name is <span class="font-semibold">Matei Mark</span>
          </p>
          <p class="text-4xl">
            <span class="text-gray-400">I'm a </span>frontend developer
          </p>
          <div class="space-y-4">
            <button
              class="
                bg-gray-500
                font-semibold
                px-5
                py-4
                rounded
                border border-transparent
                hover:bg-gray-700 hover:border hover:border-white
                transition-all
                contact-button
              "
            >
              Contact with me
            </button>
            <div class="w-fit flex space-x-4">
              <a
                class="self-center"
                href="https://www.linkedin.com/in/matei-mark-761205183/"
              >
                <picture>
                  <img
                    width="24"
                    height="24"
                    class="w-6 h-6 rounded-md"
                    src="../assets/svg/linkedin.svg"
                    alt="linked-in-link"
                  />
                </picture>
              </a>
              <a class="self-center" href="https://t.me/mateimark">
                <picture>
                  <img
                    width="24"
                    height="24"
                    class="w-6 h-6 rounded-md"
                    src="../assets/svg/telegram.svg"
                    alt="linked-in-link"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
        <div class="justify-self-center">
          <picture>
            <img
              width="750"
              height="1107"
              class="max-w-sm rounded custom-shadow"
              src="images/profile-image-bw.webp"
              alt="profile picture"
            />
          </picture>
        </div>
      </section>
      <hr class="w-9/12" />
      <section id="2" class="py-4 space-y-6">
        <p class="text-4xl font-semibold">Speciality</p>
        <div class="grid grid-cols-3 gap-12">
          <div v-for="item in speciality" :key="item.id" class="space-y-4">
            <p class="text-2xl">{{ item.title }}</p>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      </section>
      <hr class="w-9/12 ml-auto" />
      <section id="3" class="py-4 space-y-6">
        <p class="text-4xl font-semibold">Skills</p>
        <div class="grid grid-cols-3 gap-12">
          <div v-for="item in speciality" :key="item.id" class="space-y-4">
            <p class="text-2xl">{{ item.title }}</p>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      </section>
      <hr class="w-9/12" />
      <section id="4" class="py-4 space-y-6">
        <p class="text-4xl font-semibold">Portfolio</p>
        <div class="grid grid-cols-3 gap-12">
          <div v-for="item in speciality" :key="item.id" class="space-y-4">
            <p class="text-2xl">{{ item.title }}</p>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Header: () => import("components/Header.vue"),
  },
  data() {
    return {
      speciality: [
        {
          id: 1,
          title: "Some title 1",
          description:
            "Some description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quibusdam alias harum nemo. Harum, porro! Voluptate commodi vitae repellendusmaxime rem obcaecati, consequuntur excepturi laudantium minus amet, voluptates voluptas distinctio?",
        },
        {
          id: 2,
          title: "Some title 2",
          description:
            "Some description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quibusdam alias harum nemo. Harum, porro! Voluptate commodi vitae repellendusmaxime rem obcaecati, consequuntur excepturi laudantium minus amet, voluptates voluptas distinctio?",
        },
        {
          id: 3,
          title: "Some title 3",
          description:
            "Some description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quibusdam alias harum nemo. Harum, porro! Voluptate commodi vitae repellendusmaxime rem obcaecati, consequuntur excepturi laudantium minus amet, voluptates voluptas distinctio?",
        },
      ],
    };
  },
};
</script>

<style>
</style>