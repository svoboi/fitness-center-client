# FitnessCenterBackendApi.UserApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countHours**](UserApi.md#countHours) | **GET** /users/{id}/hoursBetween | 
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/{id} | 
[**getUser**](UserApi.md#getUser) | **GET** /users/{id} | 
[**getUsers**](UserApi.md#getUsers) | **GET** /users | 
[**putUser**](UserApi.md#putUser) | **PUT** /users/{id} | 
[**registerUser**](UserApi.md#registerUser) | **POST** /users | 
[**usernameAvailability**](UserApi.md#usernameAvailability) | **GET** /users/available/{username} | 



## countHours

> countHours(id, opts)



Get number of hours that trainer worked for in given timeframe

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.UserApi();
let id = 1; // Number | ID of the user to count hours for
let opts = {
  'timeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | Start of timeframe
  'timeTo': new Date("2013-10-20T19:20:30+01:00") // Date | End of timeframe
};
apiInstance.countHours(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the user to count hours for | 
 **timeFrom** | **Date**| Start of timeframe | [optional] 
 **timeTo** | **Date**| End of timeframe | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteUser

> deleteUser(id)



Delete user by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.UserApi();
let id = 1; // Number | ID of the user to delete
apiInstance.deleteUser(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the user to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getUser

> User getUser(id)



Get user by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.UserApi();
let id = 56; // Number | ID of the user to retrieve
apiInstance.getUser(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the user to retrieve | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> [User] getUsers()



Get all users

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.UserApi();
apiInstance.getUsers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putUser

> User putUser(user, id)



Put user by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.UserApi();
let user = new FitnessCenterBackendApi.User(); // User | 
let id = 1; // Number | ID of the user to put
apiInstance.putUser(user, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 
 **id** | **Number**| ID of the user to put | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerUser

> User registerUser(user)



Register new user

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.UserApi();
let user = new FitnessCenterBackendApi.User(); // User | 
apiInstance.registerUser(user, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usernameAvailability

> usernameAvailability(username)



Check if username is available

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.UserApi();
let username = jara; // String | Username to check
apiInstance.usernameAvailability(username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Username to check | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

