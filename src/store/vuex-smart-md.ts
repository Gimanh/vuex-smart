import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'

class FooState {
    count = 1
}

class FooGetters extends Getters<FooState> {
    get double () {
        return this.state.count * 2
    }

    get triple () {
        return this.getters.double + this.state.count
    }
}

class FooMutations extends Mutations<FooState> {
    increment (payload: number) {
        this.state.count += payload
    }
}

class FooActions extends Actions<FooState,
    FooGetters,
    FooMutations,
    FooActions> {
    incrementAsync () {
        return new Promise(resolve => {
            setTimeout(() => {
                this.commit('increment', 1)
                resolve()
            }, 50)
        })
    }
}

export default new Module({
    namespaced: true,
    state: FooState,
    getters: FooGetters,
    mutations: FooMutations,
    actions: FooActions
})
