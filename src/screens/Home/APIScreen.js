import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
//Thêm connect
import { connect } from 'react-redux';
//Thêm action
import { fetchGetListUsers } from '../../redux/action/getListUsers';
import { fetchGetSingleUser } from '../../redux/action/getSingleUser';
import { fetchGetSingleUserNotFound } from '../../redux/action/getSingleUserNotFound';
import { fetchGetListResource } from '../../redux/action/getListResource';
import { fetchGetSingleResource } from '../../redux/action/getSingleResource';
import { fetchGetSingleResourceNotFound } from '../../redux/action/getSingleResourceNotFound';
import { fetchGetDelayed } from '../../redux/action/getDelayedResponse';
import { fetchPostCreate } from '../../redux/action/postCreate';
import { fetchPutUpdate } from '../../redux/action/putUpdate';
import { fetchPatchUpdate } from '../../redux/action/patchUpdate';
import Loading from '../../component/Loading';
import { Divider } from 'react-native-paper';
import { Linking } from 'react-native';
import JSONTree from 'react-native-json-tree';
class APIScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowData: false,
      userPostCreate: {
        name: 'morpheus',
        job: 'leader',
      },
      userPutUpdate: {
        name: 'morpheus',
        job: 'zion resident',
      },
    };
  }
  GetListUsers = () => {
    this.setState({
      isShowData: true,
    });
    this.props.fetchGetListUsers();
  };
  GetSingleUser = () => {
    this.setState({
      isShowData: true,
    });
    this.props.fetchGetSingleUser();
  };
  GetSingleUserNotFound = () => {
    this.setState({
      isShowData: true,
    });
    this.props.fetchGetSingleUserNotFound();
  };
  GetListResource = () => {
    this.setState({
      isShowData: true,
    });
    this.props.fetchGetListResource();
  };
  GetSingleResource = () => {
    this.setState({
      isShowData: true,
    });
    this.props.fetchGetSingleResource();
  };
  GetSingleResourceNotFound = () => {
    this.setState({
      isShowData: true,
    });
    this.props.fetchGetSingleResourceNotFound();
  };
  PostCreate = () => {
    this.setState({
      isShowData: true,
    });
    this.props.fetchPostCreate(JSON.stringify(this.state.userPostCreate));
  };
  PutUpdate = () => {
    this.setState({
      isShowData: true,
    });
    this.props.fetchPutUpdate(JSON.stringify(this.state.userPutUpdate));
  };
  PatchUpdate = () => {
    this.setState({
      isShowData: true,
    });
    this.props.fetchPatchUpdate(JSON.stringify(this.state.userPutUpdate));
  };
  DeleteDelete = () => {
    this.setState({
      isShowData: true,
    });
  };
  PostRegisterSuccessful = () => {
    this.setState({
      isShowData: true,
    });
  };
  PostRegisterUnSuccessful = () => {
    this.setState({
      isShowData: true,
    });
  };
  PostLoginSuccessful = () => {
    this.setState({
      isShowData: true,
    });
  };
  PostLoginUnSuccessful = () => {
    this.setState({
      isShowData: true,
    });
  };
  GetDelayedResponse = () => {
    this.setState({
      isShowData: true,
    });
    this.props.fetchGetDelayed();
  };
  //Ẩn
  HideGetListUsers = () => {
    this.setState({
      isShowData: false,
    });
  };

  componentDidMount() {}
  render() {
    const {
      typeGet,
      typePost,
      listUsers,
      singleUser,
      loading,
      error,
      userCreate,
      loadingPost,
      errorCreate,
      statusPost,
      codePost,
    } = this.props;
    const beautify = require('json-beautify');
    console.log('errorCreate', errorCreate);
    return (
      <View style={{ paddingTop: 30 }}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://reqres.in/');
          }}
          style={{ marginRight: 20 }}
        >
          <Text style={{ color: 'green' }}>API link</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              this.GetListUsers();
            }}
            style={{ marginRight: 20 }}
          >
            <Text style={{ color: 'blue' }}>GET LIST USERS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.HideGetListUsers();
            }}
          >
            <Text style={{ color: 'blue' }}>Ẩn</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.GetSingleUser();
          }}
        >
          <Text style={{ color: 'blue' }}>GET SINGLE USER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.GetSingleUserNotFound();
          }}
        >
          <Text style={{ color: 'blue' }}>GET SINGLE USER NOT FOUND</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.GetListResource();
          }}
        >
          <Text style={{ color: 'blue' }}>GET LIST &#60;RESOURCE&#62;</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.GetSingleResource();
          }}
        >
          <Text style={{ color: 'blue' }}>GET SINGLE &#60;RESOURCE&#62;</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.GetSingleResourceNotFound();
          }}
        >
          <Text style={{ color: 'blue' }}>GET SINGLE &#60;RESOURCE&#62; NOT FOUND</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.PostCreate();
          }}
        >
          <Text style={{ color: 'blue' }}>POST CREATE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.PutUpdate();
          }}
        >
          <Text style={{ color: 'blue' }}>PUT UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.PatchUpdate();
          }}
        >
          <Text style={{ color: 'blue' }}>PATCH UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.DeleteDelete();
          }}
        >
          <Text style={{ color: 'blue' }}>DELETE DELETE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.PostRegisterSuccessful();
          }}
        >
          <Text style={{ color: 'blue' }}>POST REGISTER SUCCESSFUL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.PostRegisterUnSuccessful();
          }}
        >
          <Text style={{ color: 'blue' }}>POST REGISTER UNSUCCESSFUL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.PostLoginSuccessful();
          }}
        >
          <Text style={{ color: 'blue' }}>POST LOGIN SUCCESSFUL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.PostLoginUnSuccessful();
          }}
        >
          <Text style={{ color: 'blue' }}>POST LOGIN UNSUCCESSFUL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 20 }}
          onPress={() => {
            this.GetDelayedResponse();
          }}
        >
          <Text style={{ color: 'blue' }}>GET DELAYED RESPONSE</Text>
        </TouchableOpacity>

        {(loading || loadingPost) && <Loading />}
        <Divider />
        <View style={{ paddingTop: 20, backgroundColor: '#e1f0ff' }}>
          <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }}>Kết quả</Text>
          <Text style={{ fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 10 }}>
            GET: <Text style={{ color: 'green' }}>{typeGet}</Text>
          </Text>
          <Text>
            {this.state.isShowData && listUsers && listUsers.length > 0 && JSON.stringify(listUsers, null, 2)}
          </Text>
          <Text>
            {this.state.isShowData &&
              singleUser &&
              Object.keys(singleUser).length > 0 &&
              JSON.stringify(singleUser, null, 2)}
          </Text>
          <Text style={{ color: 'red', marginBottom: 20 }}>
            {this.state.isShowData && error && JSON.stringify(error, null, 2)}
          </Text>
          <Divider />
          <Text style={{ marginTop: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 10 }}>
            POST: <Text style={{ color: 'green' }}>{typePost}</Text>
          </Text>
          {this.state.isShowData && statusPost && <Text style={{ color: 'black' }}>status: {statusPost}</Text>}
          {userCreate && Object.keys(userCreate).length > 0 && (
            <>
              <Text>{beautify(userCreate, null, 2, 100)}</Text>
            </>
          )}

          {this.state.isShowData && errorCreate && (
            <Text style={{ color: 'red' }}>error: {JSON.stringify(errorCreate, null, 2)} </Text>
          )}

          {this.state.isShowData && codePost && (
            <Text style={{ color: 'red' }}>code: {JSON.stringify(codePost, null, 2)}</Text>
          )}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listUsers: state.apiListUsers.data,
    loading: state.apiListUsers.loading,
    error: state.apiListUsers.error,
    singleUser: state.apiListUsers.singleUser,
    typeGet: state.apiListUsers.type,
    userCreate: state.postReducer.userCreate,
    errorCreate: state.postReducer.errorCreate,
    loadingPost: state.postReducer.loadingPost,
    statusPost: state.postReducer.statusPost,
    codePost: state.postReducer.codePost,
    typePost: state.postReducer.type,
  };
};

export default connect(mapStateToProps, {
  fetchGetListUsers,
  fetchGetSingleUser,
  fetchGetSingleUserNotFound,
  fetchGetListResource,
  fetchGetSingleResource,
  fetchGetSingleResourceNotFound,
  fetchGetDelayed,
  fetchPostCreate,
  fetchPutUpdate,
  fetchPatchUpdate,
})(APIScreen);
