import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// 展示组件
import Password from "../components/Password";
// Action Creators
import { fetchPasswordDataSet, inputTag, inputUrl, inputName, inputPassword, createPassword, showDialog, hideDialog, makePasswordVisible, makePasswordHidden, deletePassword } from '../actions/passwordAction';

function mapStateToProps(state) {
	return {
		dataSet: state.dataSet,
		loading: state.loading,
		dialogVisible: state.dialogVisible,
		tag: state.tag,
		url: state.url,
		name: state.name,
		password: state.password
	};
}

// mapDispatchToProps
function mapDispatchToProps(dispatch) {
	return {
    fetchPasswordDataSet: bindActionCreators(fetchPasswordDataSet, dispatch),
		inputTag: bindActionCreators(inputTag, dispatch), 
		inputUrl: bindActionCreators(inputUrl, dispatch),
		inputName: bindActionCreators(inputName, dispatch),
		inputPassword: bindActionCreators(inputPassword, dispatch),
		createPassword: bindActionCreators(createPassword, dispatch),
		showDialog: bindActionCreators(showDialog, dispatch),
		hideDialog: bindActionCreators(hideDialog, dispatch),
		makePasswordVisible: bindActionCreators(makePasswordVisible, dispatch),
		makePasswordHidden: bindActionCreators(makePasswordHidden, dispatch),
		deletePassword: bindActionCreators(deletePassword, dispatch)
	};
}

// 生成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Password);