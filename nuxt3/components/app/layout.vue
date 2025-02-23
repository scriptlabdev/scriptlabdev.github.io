<template>
  <v-app>

    <!-- Main Drawer -->
    <v-navigation-drawer
      :width="$slots.drawer ? drawerWidth : 60"
      v-model="drawer"
    >
      <div class="d-flex">
        <div
          class="bg-grey-darken-4"
          style="height:100vh; max-width:60px; overflow:auto;"
        >
          <v-list density="compact">

            <v-dialog>
              <template #activator="{ props }">
                <v-list-item v-bind="props" ref="btnSearch">
                  <template #prepend>
                    <v-icon>mdi-magnify</v-icon>
                  </template>
                </v-list-item>
              </template>

              <div class="mx-auto" style="width:500px; max-width:90vw!important;">
                <v-card>
                  <v-card-title>Search</v-card-title>
                  <v-card-text class="border-t">
                    <v-text-field label="Search" v-model="page.params.q" :hide-details="true" class="mt-4" />
                  </v-card-text>
                  <div style="max-height:70vh; overflow:auto;">
                    <v-list>
                      <v-list-item
                        v-for="p in pageData"
                        :key="p.slug"
                        :to="`/lab/${p.slug}`"
                      >
                        {{ p.name }}
  
                        <template #prepend>
                          <v-icon>{{ p.icon }}</v-icon>
                        </template>
                      </v-list-item>
                    </v-list>
                  </div>
                  <v-card-actions class="border-t">
                    <v-spacer />
                    <v-btn @click="$refs.btnSearch.$el.click()">Ok</v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </v-dialog>

            <v-divider />
            <template v-for="p in page.data">
              <v-tooltip :text="p.name">
                <template #activator="{ props }">
                  <v-list-item :to="`/lab/${p.slug}`" v-bind="props">
                    <template #prepend>
                      <v-icon>{{ p.icon }}</v-icon>
                    </template>
                  </v-list-item>
                </template>
              </v-tooltip>
            </template>
          </v-list>
        </div>
        <div
          class="flex-grow-1"
          style="max-height:100vh; overflow:auto;"
          v-if="$slots.drawer"
        >
          <slot name="drawer"></slot>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- Main bar -->
    <v-app-bar elevation="1" v-if="$slots.appbar || $slots.drawer || title">
      <v-container class="d-flex align-center" :style="{maxWidth: containerWidth}">
        <v-app-bar-nav-icon
          class="d-lg-none me-3"
          @click="drawer=true"
        />
        <v-toolbar-title v-if="title">{{ title }}</v-toolbar-title>
        <slot name="appbar"></slot>
      </v-container>
    </v-app-bar>

    <div
      v-if="pageCurrent && pageCurrent.source"
      style="position:fixed; bottom:10px; right:10px; z-index:999;"
    >
      <v-tooltip>
        Source code

        <template #activator="{ props }">
          <v-btn
            color="primary"
            icon="mdi-xml"
            :href="pageCurrent.source"
            target="_blank"
            v-bind="props"
          />
        </template>
      </v-tooltip>
    </div>

    <!-- Content -->
    <v-main class="bg-grey-lighten-2" style="height:100vh; position:relative; overflow:auto!important;">
      <v-container
        class="pa-0 pa-lg-5 mx-auto"
        :style="{maxWidth: containerWidth}"
      >
        <v-card
          :style="{height: (useDisplay.lgAndUp? 'auto': '100%')}"
          v-if="containerCard"
        >
          <v-card-text>
            <slot></slot>
          </v-card-text>
        </v-card>

        <div
          v-if="!containerCard"
          :style="{height: (useDisplay.lgAndUp? 'auto': '100%')}"
        >
          <slot></slot>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
  import { useDisplay } from 'vuetify';

  export default {
    props: {
      title: {
        type: String,
        default: '',
      },
      drawerWidth: {
        type: String,
        default: '350',
      },
      containerWidth: {
        type: String,
        default: '1280px',
      },
      containerCard: {
        type: Boolean,
        default: true,
      },
    },

    computed: {
      pageData() {
        return this.page.data.filter(item => {
          return JSON.stringify(item).toLowerCase().includes(this.page.params.q.toLowerCase());
        });
      },
      pageCurrent() {
        return this.page.data.filter(page => `/lab/${page.slug}` == this.$route.fullPath).at(0) || null;
      },
    },

    data() {
      return {
        drawer: null,
        useDisplay: useDisplay(),
        page: {
          params: {
            q: '',
          },
          data: (() => {
            let files = Object.entries(import.meta.glob('@/pages/lab/index/*/*.vue', {
              import: 'default',
              eager: true,
              // as: 'raw',
            }));

            return files
              .filter(([path, file]) => !!file.meta)
              .map(([path, file]) => {
                return {
                  slug: path.split('/').at(-2).replace(/^index$/g, ''),
                  icon: 'mdi-circle',
                  name: 'Default',
                  active: false,
                  order: 0,
                  ...(file.meta || {})
                };
              })
              .filter(item => {
                return this.$devMode || item.active;
              })
              .sort((a, b) => {
                if (a.order < b.order) return -1;
                if (a.order > b.order) return 1;
                return 0;
              });
          })(),
        },
      };
    },
  };
</script>
