<template>
    <v-dialog v-model="dialog" max-width="1000px">
        <v-card>
            <v-card-title>
                <span class="headline">Editar Pessoa</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                v-model="pessoa.nome"
                                :rules="[v => !!v || 'Obrigatório prencher o nome!']"
                                label="Nome"
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                v-model="pessoa.email"
                                :rules="[v => !!v || 'Obrigatório prencher o email!']"
                                label="E-mail"
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                v-model="pessoa.matricula"
                                :rules="[v => !!v || 'Obrigatório prencher o matrícula!']"
                                v-mask="['######-#', '######-#-##']"
                                label="Matrícula"
                                outlined
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                v-model="pessoa.dataNascimento"
                                :rules="[v => !!v || 'Obrigatório prencher a data nascimento!']"
                                v-mask="['##/##/####']"
                                label="Data Nascimento"
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-select
                                :items="sexos"
                                v-model="pessoa.sexo"
                                :rules="[v => !!v || 'Obrigatório prencher o sexo!']"
                                label="Sexo"
                                outlined
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-select
                                :items="hierarquias"
                                item-text="hierarquia"
                                item-value="id"
                                v-model="pessoa.idHierarquia"
                                :rules="[v => !!v || 'Obrigatório informar Posto/Graduação!']"
                                label="Hierarquia"
                                outlined
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-select
                                :items="obms"
                                v-model="pessoa.idBatalhao"
                                item-text="abreviacao"
                                item-value="id"
                                :rules="[v => !!v || 'Obrigatório prencher a OBM!']"
                                label="OBM"
                                outlined
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-select
                                :items="setores"
                                item-text="setor"
                                item-value="id"
                                v-model="pessoa.idSetor"
                                :rules="[v => !!v || 'Obrigatório prencher o setor!']"
                                label="Setor"
                                outlined
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-select
                                :items="tipoPessoas"
                                v-model="pessoa.tipoPessoa"
                                item-text="tipo"
                                item-value="value"
                                :rules="[v => !!v || 'Obrigatório prencher o tipo do cadastro!']"
                                label="Tipo usuário"
                                outlined
                            ></v-select>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="12" md="12">
                            <permissoes-pessoa
                                v-bind:idResponsavel="pessoa.id"
                                v-if="temPermissao"
                            ></permissoes-pessoa>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

    export default {
        data: () => ({
            tipoPessoas: [
                { tipo: "Administrador", value: true },
                { tipo: "Normal", value: false }
            ],
            sexos: [
                "FEMININO",
                "MASCULINO"
            ],
            snackbar: {
                color: "",
                text: "",
                state: false,
            },
            idPessoa: null,
            temPermissao: false,
        }),
        computed: {
            dialog: {
                get() {
                    return this.dialogEditar;
                },
                set() {
                    this.$emit('close',false);
                }
            }
        },
        props: {
            dialogEditar: Boolean,
            pessoa: Object,
            hierarquias: Array,
            obms: Array,
            setores: Array,
            escalas: Array
        },
        watch: {
            pessoa(val) {
                this.idPessoa = val.id;
            },
            dialogEditar(val) {
                if(val) {
                    const vm = this;
                    if (typeof(Storage) !== "undefined") {
                        if(localStorage.getItem("usuario")){
                            this.axios.get(process.env.VUE_APP_URL_API + '/pessoa/getByUsuario/' + localStorage.getItem("usuario")).then(response => {
                                if(response.data.tipoPessoa) {
                                    vm.temPermissao = true;
                                }
                            });
                        }
                    }
                }
            }
        },
        methods: {
            close(){
                this.$emit('close', "teste");
            },
            isValidEmail() {
                var parse_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
                return  parse_email.test(this.pessoa.email);
            },
            isValidDate(date) {
                var aux = [];
                if(date != ''){
                    aux = date.split('/');
                    if(parseInt(aux[0]) > 0 && parseInt(aux[0]) <= 31){
                        if(parseInt(aux[1]) > 0 && parseInt(aux[1]) <= 12){
                            if(parseInt(aux[2]) > 1900 && parseInt(aux[2]) < 3000){
                                return true;
                            }
                        }
                    }
                }

                return false;
            },
            save () {
                if(this.validaCampos()){
                    this.axios.put(process.env.VUE_APP_URL_API + '/pessoa', this.pessoa).then(response => {
                        if(response.data){
                            this.snackbar.color = 'success';
                            this.snackbar.text = "Registro atualizado com sucesso!";
                            this.snackbar.state = true;
                            this.close();
                        }
                        if(!response.data) {
                            this.snackbar.color = 'error';
                            this.snackbar.text  = "Ocorreu um erro ao atualizar!";
                            this.snackbar.state = true;
                            this.close();
                        }
                    });
                }
            },
            validaCampos() {
                return  this.pessoa.nome != '' &&
                        this.isValidEmail() &&
                        this.pessoa.matricula != '' &&
                        this.pessoa.sexo != '' &&
                        this.pessoa.idHierarquia != null &&
                        this.pessoa.idBatalhao != null &&
                        this.pessoa.idSetor != null;
            },
        }
    }

</script>
