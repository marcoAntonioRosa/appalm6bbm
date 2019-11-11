import Vue from 'vue';
import Offset from '@/components/helper/Offset';
import Card from '@/components/material/Card';
import ChartCard from '@/components/material/ChartCard';
import Notification from '@/components/material/Notification';
import StatsCard from '@/components/material/StatsCard';

import Snackbar from '@/components/helper/Snackbar';

import NovaPessoa from '@/components/material/NovaPessoa';
import EditPessoa from '@/components/material/EditPessoa';

Vue.component('snackbar', Snackbar);

Vue.component('nova-pessoa', NovaPessoa);
Vue.component('editar-pessoa', EditPessoa);

Vue.component(Offset.name, Offset);
Vue.component(Card.name, Card);
Vue.component(ChartCard.name, ChartCard);
Vue.component(Notification.name, Notification);
Vue.component(StatsCard.name, StatsCard);
