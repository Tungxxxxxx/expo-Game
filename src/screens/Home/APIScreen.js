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
import Loading from '../../component/Loading';
import { Divider } from 'react-native-paper';
class APIScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowData: false,
      userPostCreate: {
        name: 'morpheus',
        job: 'leader',
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
  };
  PatchUpdate = () => {
    this.setState({
      isShowData: true,
    });
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
    const { listUsers, singleUser, loading, error } = this.props;
    console.log(loading);
    return (
      <View style={{ paddingTop: 30 }}>
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
          onPress={() => {
            this.GetDelayedResponse();
          }}
        >
          <Text style={{ color: 'blue' }}>GET DELAYED RESPONSE</Text>
        </TouchableOpacity>

        {loading && <Loading />}
        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
        <View style={{ backgroundColor: '#e1f0ff' }}>
          <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }}>Kết quả</Text>
          <Text>
            {this.state.isShowData && listUsers && listUsers.length > 0 && JSON.stringify(listUsers, null, 2)}
          </Text>
          <Text>
            {this.state.isShowData &&
              singleUser &&
              Object.keys(singleUser).length > 0 &&
              JSON.stringify(singleUser, null, 2)}
          </Text>
          <Text style={{ color: 'red' }}>{this.state.isShowData && error && JSON.stringify(error, null, 2)}</Text>
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
})(APIScreen);
