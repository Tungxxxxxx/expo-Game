import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as API from '../../common/API';
class APIScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GetListUsers: false,
      GetSingleUser: false,
      GetSingleUserNotFound: false,
      GetListResource: false,
      GetSingleResource: false,
      GetSingleResourceNotFound: false,
      PostCreate: false,
      PutUpdate: false,
      PatchUpdate: false,
      DeleteDelete: false,
      PostRegisterSuccessful: false,
      PostRegisterUnSuccessful: false,
      PostLoginSuccessful: false,
      PostLoginUnSuccessful: false,
      GetDelayedResponse: false,
    };
  }
  GetListUsers = () => {};
  GetSingleUser = () => {};
  GetSingleUserNotFound = () => {};
  GetListResource = () => {};
  GetSingleResource = () => {};
  GetSingleResourceNotFound = () => {};
  PostCreate = () => {};
  PutUpdate = () => {};
  PatchUpdate = () => {};
  DeleteDelete = () => {};
  PostRegisterSuccessful = () => {};
  PostRegisterUnSuccessful = () => {};
  PostLoginSuccessful = () => {};
  PostLoginUnSuccessful = () => {};
  GetDelayedResponse = () => {};
  //Ẩn
  HideGetListUsers = () => {};
  HideGetSingleUser = () => {};
  HideGetSingleUserNotFound = () => {};
  HideGetListResource = () => {};
  HideGetSingleResource = () => {};
  HideGetSingleResourceNotFound = () => {};
  HidePostCreate = () => {};
  HidePutUpdate = () => {};
  HidePatchUpdate = () => {};
  HideDeleteDelete = () => {};
  HidePostRegisterSuccessful = () => {};
  HidePostRegisterUnSuccessful = () => {};
  HidePostLoginSuccessful = () => {};
  HidePostLoginUnSuccessful = () => {};
  HideGetDelayedResponse = () => {};
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.GetListUsers();
          }}
        >
          <Text style={{ color: 'blue' }}>GET LIST USERS</Text>
        </TouchableOpacity>
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
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    GetListUsers: () => dispatch({ type: API.GET_LIST_USERS }),
    GetSingleUser: () => dispatch({ type: API.GET_SINGLE_USER }),
    GetSingleUserNotFound: () => dispatch({ type: API.GET_SINGLE_USER_NOT_FOUND }),
    GetListResource: () => dispatch({ type: API.GET_LIST_RESOURCE }),
    GetSingleResource: () => dispatch({ type: API.GET_SINGLE_RESOURCE }),
    GetSingleResourceNotFound: () => dispatch({ type: API.GET_SINGLE_RESOURCE_NOT_FOUND }),
    PostCreate: () => dispatch({ type: API.POST_CREATE }),
    PutUpdate: () => dispatch({ type: API.PUT_UPDATE }),
    PatchUpdate: () => dispatch({ type: API.PATCH_UPDATE }),
    DeleteDelete: () => dispatch({ type: API.DELETE_DELETE }),
    PostRegisterSuccessful: () => dispatch({ type: API.POST_REGISTER_SUCCESSFUL }),
    PostRegisterUnSuccessful: () => dispatch({ type: API.POST_REGISTER_UNSUCCESSFUL }),
    PostLoginSuccessful: () => dispatch({ type: API.POST_LOGIN_SUCCESSFUL }),
    PostLoginUnSuccessful: () => dispatch({ type: API.POST_LOGIN_UNSUCCESSFUL }),
    GetDelayedResponse: () => dispatch({ type: API.GET_DELAYED_RESPONSE }),
  };
};
export default connect(mapDispatchToProps)(APIScreen);
