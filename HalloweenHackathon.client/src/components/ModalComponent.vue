<template>
  <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
    <div class="modal-dialog" :class="modalSize">
      <div class="modal-content removeModalBG">
        <div class="modal-header" v-if="showHeader">
          <h1 class="modal-title fs-5" :id="modalId + 'Label'">
            <slot name="modalTitle"></slot>
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="modalBody">...</slot>
        </div>
        <div class="modal-footer" v-if="showFooter">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <slot name="modalFooter">
            <button type="button" class="btn btn-primary">Save changes</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    modalId: { type: String },
    modalSize: { type: String, default: '' },
    showHeader: { type: Boolean, default: false },
    showFooter: { type: Boolean, default: false }
  },

  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
  .removeModalBG{
    background-color: transparent !important;
  }
  .background-img{
    background-image: url('https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-position: center;
    height: 86vh;
    width: 100%;
    box-shadow: 0 0 5px 5px #80808080;
  }
</style>