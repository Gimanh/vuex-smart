import { Vue, Component } from 'vue-property-decorator'
import { registerModule, Module } from 'vuex-smart-module'
import vuexSmartStoreModule from '@/store/vuex-smart-md'
import { Action, State/*, Actions */ } from 'vuex-class'

@Component
export default class App extends Vue {
    public message = 'hello'

    @State(state => state.foo.count) countFoo!: number

    @State(state => state.barNs.nestedModuleNs.count) countBar!: number

    @Action('incrementAsync', { namespace: 'foo' }) incrementFoo!: any;

    @Action('incrementAsync', { namespace: 'barNs/nestedModuleNs' }) incrementBar!: any;

    created () {
        registerModule(this.$store, 'foo', 'foo/', vuexSmartStoreModule)

        const clonedModule = vuexSmartStoreModule.clone()

        const nested = new Module({
            modules: {
                nestedModuleNs: clonedModule
            }
        })

        registerModule(this.$store, ['barNs'], 'bar', nested)

        console.log(this.$store)
    }
}
