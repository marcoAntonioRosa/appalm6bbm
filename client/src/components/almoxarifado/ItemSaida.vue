<template>
    <v-container>
        <v-row :style="{ 'padding-left' : '50px', 'height': '60px' }" >
            <v-col cols="12" sm="12" md="6">
                <v-autocomplete
                    v-model="idProduto"
                    :items="produtos"
                    outlined
                    item-value="id" item-text="produto"
                    @change="buscaPropriedades"
                    label="Produto"
                ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="12" md="3">
                <v-select
                    :items="propriedades"
                    v-model="idPropriedadeProduto"
                    label="Propriedade Produto"
                    item-value="id" item-text="tamanho"
                    outlined
                ></v-select>
            </v-col>
            <v-col cols="12" sm="12" md="2" :style="{ width: '9x' }">
                <v-text-field
                    v-model="qtdSaida"
                    label="Qtd. Saída"
                    @keyup="verificaEstoque"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="1">
                <v-btn text icon :style="{ 'margin-top': '7px' }" @click="remove">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-row v-show="avisoQtdEstoque" class="linha-alerta-qtd">
            <v-col cols="12" sm="12" md="12">
                <small class="texto-alerta-qtd">A quantidade para saída é superior a em estoque!</small>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    data: () => ({
        idProduto: null,
        idPropriedadeProduto: null,
        qtdSaida: 0,
        produtos: [],
        propriedades: [],
        itemRetorno: {},
        alertaSemEstoque: false,
        avisoQtdEstoque: false,
        erro: false,
    }),
    computed: {
        id: {
            get() {
                return this.idProduto;
            },
            set(val) {
                this.$emit('idProduto', val);
            }
        }
    },
    watch: {
        getItens(val) {
            if(val) {
                var item = {};
                item.index = this.index;
                item.idProduto = this.idProduto;
                item.idPropriedadeProduto = this.idPropriedadeProduto;
                item.qtdSaida = this.qtdSaida;
                this.$emit('item', item);
            }
        },
        item() {
            this.idProduto = this.item.idProduto;
            this.qtdSaida = this.item.qtdSaida;
            this.idPropriedadeProduto = this.item.idPropriedadeProduto;
            this.buscaPropriedades();
            this.verificaEstoque();
        }
    },
    props: {
        getItens: Boolean,
        item: Object,
        index: Number
    },
    created () {
        this.getProdutos();
        this.buscaPropriedades();
        this.idProduto = this.item.idProduto;
        this.qtdSaida = this.item.qtdSaida;
        this.idPropriedadeProduto = this.item.idPropriedadeProduto;
    },
    methods: {
        getProdutos() {
            this.axios.get(process.env.VUE_APP_URL_API + '/produto').then(response => {
                this.produtos = response.data;
            });
        },
        buscaPropriedades() {
            this.axios.get(process.env.VUE_APP_URL_API + '/produto/getPropriedadesProdutosSaida/' + this.idProduto).then(response => {
                this.propriedades = response.data;
            });
        },
        remove() {
            this.$emit('remove', this.index);
        },
        verificaEstoque() {
            if(this.qtdSaida != "") {
                this.axios.get(process.env.VUE_APP_URL_API + '/produto/verificaEstoque/' + this.idPropriedadeProduto + '/' + this.qtdSaida + '/').then(response => {
                    if(!response.data) {
                        this.avisoQtdEstoque = true;
                    }

                    if(response.data) {
                        this.avisoQtdEstoque = false;
                    }
                });

            }

            if(this.qtdSaida == "") {
                this.avisoQtdEstoque = false;
            }
        },
    }
}
</script>

<style>
    @media only screen and (max-width: 640px) {
        .snackbar {
            margin-top: -10px;
        }
    }

    @media only screen and (min-width: 640px) {
        .snackbar {
            margin-top: -50px;
        }
    }

    .linha-alerta-qtd {
        margin-bottom: -43px;
    }

    .texto-alerta-qtd {
        color: red;
        float: right;
        margin-right: 150px;
    }
</style>
