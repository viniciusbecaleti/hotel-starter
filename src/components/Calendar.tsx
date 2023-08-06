import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'

registerLocale('ptBR', ptBR)
setDefaultLocale('ptBR')

export function Calendar({ ...rest }: ReactDatePickerProps) {
  return <DatePicker dateFormat="dd/MM/yyyy" {...rest} />
}
