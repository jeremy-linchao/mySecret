import * as React from 'react';
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  DetailsRow,
  CheckboxVisibility
} from 'office-ui-fabric-react/lib/DetailsList';
import {
  Spinner,
  SpinnerSize
} from 'office-ui-fabric-react/lib/Spinner';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import '../styles/Password.css';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { CommandButton, PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

let _columns = [
  {
    key: 'tag',
    name: '标签',
    fieldName: 'tag',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true
  },
  {
    key: 'url',
    name: 'url',
    fieldName: 'url',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true
  },
  {
    key: 'name',
    name: '用户名',
    fieldName: 'name',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true
  },
  {
    key: 'password',
    name: '密码',
    fieldName: 'password',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true
  },
  {
    key: 'operation',
    name: '操作',
    fieldName: 'operation',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true
  },

];

class Password extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPasswordDataSet();
  }

  renderOperation(id, isHidden, makePasswordVisible, makePasswordHidden, deletePassword) {
    if (isHidden) {
      return (
        <div className="operationGroup">
          <IconButton
            iconProps={{ iconName: 'View' }} className="viewButton"
            onClick={
              () => {
                makePasswordVisible(id)
              }
            }
          />
          <div className="divider" />
          <IconButton
            iconProps={{ iconName: 'Delete' }} className="deleteButton"
            onClick={
              () => {
                deletePassword(id)
              }
            }
          />
        </div>
      )
    } else {
      return (
        <div className="operationGroup">
          <IconButton
            iconProps={{ iconName: 'Hide' }} className="viewButton"
            onClick={() => {
              makePasswordHidden(id)
            }}
          />
          <div className="divider" />
          <IconButton
            iconProps={{ iconName: 'Delete' }} className="deleteButton"
            onClick={
              () => {
                deletePassword(id)
              }
            }
          />
        </div>
      )
    }
  }

  computeDataSet(dataSet, makePasswordVisible, makePasswordHidden, deletePassword) {
    return dataSet.map(ele => {
      return {
        tag: <Label>{ele.tag}</Label>,
        name: <Label>{ele.name}</Label>,
        url: <Label>{ele.url}</Label>,
        password: ele.isHidden ? <Label>******</Label> : <Label>{ele.password}</Label>,
        operation: this.renderOperation(ele.id, ele.isHidden, makePasswordVisible, makePasswordHidden, deletePassword)
      }
    })
  }

  render() {
    const { dataSet, loading, dialogVisible, inputTag, inputUrl, inputName, inputPassword, createPassword, showDialog, hideDialog, changeVisible, makePasswordVisible, makePasswordHidden, deletePassword } = this.props;
    const computedDataSet = this.computeDataSet(dataSet, makePasswordVisible, makePasswordHidden, deletePassword);
    return (
      <div className="password">
        <div className="content-header">
          <IconButton
            iconProps={{ iconName: 'AddTo', style: { fontSize: '30px' } }}
            onClick={() => showDialog()}
            className="createButton"
          />
          <Dialog
            isOpen={dialogVisible}
            type={DialogType.normal}
            onDismiss={() => hideDialog()}
            title='创建密码'
            isBlocking={false}
            containerClassName='ms-dialogMainOverride'
          >
            <TextField label='标签' required={true} onChanged={value => inputTag(value)} />
            <TextField label='url' required={true} onChanged={value => inputUrl(value)} />
            <TextField label='用户名' required={true} onChanged={value => inputName(value)} />
            <TextField label='密码' required={true} onChanged={value => inputPassword(value)} />
            <DialogFooter>
              <DefaultButton onClick={() => hideDialog()} text='取消' />
              <PrimaryButton onClick={() => createPassword()} text='创建' />
            </DialogFooter>
          </Dialog>
        </div>
        <div className="content-table">
          <DetailsList
            items={computedDataSet}
            columns={_columns}
            layoutMode={DetailsListLayoutMode.fixedColumns}
            checkboxVisibility={CheckboxVisibility.hidden}
          />
          {loading && <Spinner size={SpinnerSize.large} label='正在加载中...' />}
        </div>
      </div>
    )
  }
}

export default Password;