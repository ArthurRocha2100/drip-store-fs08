import { useProductDataContext } from '../../hooks/useProductData'
import { CheckBoxFilter } from '../CheckboxFilter/CheckboxFilter'
import { CheckBoxFilterGroup } from '../CheckboxFilterGropup/CheckboxFilterGroup'
import { DpInputRadio } from '../InputRadio/InputRadio'
import { InputRadioGropu } from '../InputRadioGroup/InputRadioGroup'
import styles from './ProductsFilters.module.css'

export interface ProductsFiltersProps {
  onClick: () => void
}

const handleCheckBoxClick = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  e.stopPropagation()
}


//TODO - Implementar demais filtros chackbox e impmentar filtro de inputradio.
export const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  onClick,
}) => {
  const { addFilter, removeFilter } = useProductDataContext()

  return (
    <div className={styles.ProductsFilters} onClick={onClick}>
      {}
      <div
        className={styles.ProductsFiltersContainer}
        onClick={handleCheckBoxClick}
      >
        <p className={styles.ProductsFiltersTitle}>Filtrar por</p>
        <CheckBoxFilterGroup groupName="Marka">
          <CheckBoxFilter
            inputId="checkbox-filter-marka-1"
            textLabel="Adiddas"
            onChange={(isChecked: boolean) => {
              if (isChecked) {
                addFilter('brand', 'adidas', isChecked)
              } else {
                removeFilter('brand', 'adidas')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-2"
            textLabel="Calenciaga"
            onChange={(isChecked: boolean) => {
              if (isChecked) {
                addFilter('brand', 'calenciaga', isChecked)
              } else {
                removeFilter('brand', 'calenciaga')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-3"
            textLabel="K-Swiss"
            onChange={(isChecked: boolean) => {
              if (isChecked) {
                addFilter('brand', 'k-swiss', isChecked)
              } else {
                removeFilter('brand', 'k-swiss')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-4"
            textLabel="Puma"
            onChange={(isChecked: boolean) => {
              if (isChecked) {
                addFilter('brand', 'Puma', isChecked)
              } else {
                removeFilter('brand', 'Puma')
              }
            }}
          />
        </CheckBoxFilterGroup>

        {/* <CheckBoxFilterGroup groupName="Categoria">
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-1"
            textLabel="Esporte e lazer"
            onChange={() => handleCheckboxChange({ category: ['Esporte e lazer'] })}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-2"
            textLabel="Casual"
            onChange={() => handleCheckboxChange({ category: ['Casual'] })}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-3"
            textLabel="Utilitário"
            onChange={() => handleCheckboxChange({ category: ['Utilitário'] })}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-4"
            textLabel="Corrida"
            onChange={() => handleCheckboxChange({ category: ['Corrida'] })}
          />
        </CheckBoxFilterGroup>

        <CheckBoxFilterGroup groupName="Gênero">
          <CheckBoxFilter
            inputId="checkbox-filter-genero-1"
            textLabel="Maculino"
            onChange={() => handleCheckboxChange({ gender: ['Masculino'] })}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-genero-2"
            textLabel="Feminino"
            onChange={() => handleCheckboxChange({ gender: ['Feminino'] })}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-genero-3"
            textLabel="Unisex"
            onChange={() => handleCheckboxChange({ gender: ['Unisex'] })}
          /> 
        </CheckBoxFilterGroup> */}

        <InputRadioGropu groupName="Estado">
          <DpInputRadio id="estado1" name="estado" label="Novo" />
          <DpInputRadio id="estado2" name="estado" label="Usado" />
        </InputRadioGropu>
      </div>
    </div>
  )
}
