<template>
    <header class="mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div class="mdl-layout__header-row">
            <div class="mdl-layout-spacer"></div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
                <label class="mdl-button mdl-js-button mdl-button--icon" for="add_button">
                    <i class="material-icons">add_circle_outline</i>
                </label>
                <div class="mdl-textfield__expandable-holder widefield">
                    <input class="mdl-textfield__input" type="text" name="url" id="add_button">
                </div>
            </div>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                <i class="material-icons">file_download</i>
            </button>
        </div>
    </header>
</template>

<style scoped>
    .widefield {
        width: 1000px;
    }
</style>
<style>
    .mdl-layout__header .mdl-layout__drawer-button {
      color: #37474F !important;
    }
</style>
