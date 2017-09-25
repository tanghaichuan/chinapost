<template>
    <div class="drop-select">
        <div class="input" @click="openToggle">
            <span class="dropdown-placeholder" v-show="isEmpty">请选择</span>
            <span class="dropdown-selection-icon">
                <i class="aid aid-chevron-down aid-select-arrow"></i>
            </span>
            <ul v-if="!isEmpty" class="list-inline m-0 p-0" @click.stop.prevent="stopToggle">
                <li v-for="(item, index) in data" :key="item" class="list-inline-item">
                    <span class="tag tag--text">
                        {{item}}
                        <i class="aid aid-close tag__title--clear" @click="del(index)"></i>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import bus from '../bus'
export default {
    name: "dropSelect",
    data() {
        return {
            data: []
        }
    },
    props: {
        values: {
            type: Array,
            default: []
        }
    },
    computed: {
        isEmpty() {
            return (Array.isArray(this.values) && this.values.length === 0) || (Object.prototype.isPrototypeOf(this.values) && Object.keys(this.values).length === 0);
        }
    },
    methods: {
        openToggle() {
            this.$emit('openToggle')
        },
        stopToggle() {
            return
        },
        del(index) {
            this.data.splice(index, 1)
        }
    },
    watch: {
        values(val) {
            this.$emit('update:values', val)
        },
    },
    created() {
        bus.$on('getCheckBoxSel', res => {
            this.data = res
        })
    }
}
</script>
<style scoped lang="less">
.list-inline {
    display: inline-block;
    max-width: 172px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    .tag {
        margin-top: 1px;
    }
}

.drop-select {
    width: 100%;
    flex: 0 0 100%;
    min-width: 10px;
    .input {
        position: relative;
        cursor: pointer;
        padding: 0 10px;
        height: 28px;
        line-height: calc(27px - 1px * 2);
        border: 1px solid #d9d9d9;
        font-size: 12px;
        display: block;
        color: #455a74;
        background-color: #fff;
        background-image: none;
        background-clip: padding-box;
        border-radius: 4px;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    }
    .dropdown-placeholder {
        font-size: 12px;
        color: #999;
        padding-right: 1.5625rem;
    }
    .dropdown-selection-icon {
        position: absolute;
        right: 4px;
        font-size: 16px;
        color: #dadada;
        vertical-align: top;
    }
}
</style>
