import 'antd/lib/select/style/index.css'
import 'antd/lib/slider/style/index.css'

import Select from 'antd/lib/select'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  setTrainedModel
} from '../../redux/actions/settings/index'
import { RootState } from '../../redux/reducers'
import { SettingsState } from '../../redux/reducers/settings'

import { Container, DropdownRow } from './styles'

const { Option } = Select

export const Production: React.FC = () => {
  const dispatch = useDispatch()
  const {
    trainedModel
  } = useSelector<RootState>((state) => state.settings) as SettingsState

  return (
    <Container>
      <DropdownRow>
        <span>Trained model</span>
        <Select
          defaultValue={trainedModel}
          style={{ width: 140 }}
          onChange={value => dispatch(setTrainedModel(value))}
        >
          <Option value={trainedModel}>{trainedModel}</Option>
        </Select>
      </DropdownRow>

    </Container>
  )
}
