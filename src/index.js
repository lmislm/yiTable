import YiTable from './components/Table'
import YiColumn from './components/TableColumn'
import ColumnMixin from './components/column-mixin'
import './icons/index'

export default {
  install(Vue) {
    Vue.component('yi-table', YiTable)
    Vue.component('yi-table-column', YiColumn)
    Vue.component('yi-table-icon', YiTableIcon)
  }
}
export {YiTable, YiColumn, ColumnMixin}
