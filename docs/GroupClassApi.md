# FitnessCenterBackendApi.GroupClassApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTrainer**](GroupClassApi.md#addTrainer) | **PUT** /groupClasses/{classId}/trainers | 
[**deleteGroupClass**](GroupClassApi.md#deleteGroupClass) | **DELETE** /groupClasses/{id} | 
[**getGroupClass**](GroupClassApi.md#getGroupClass) | **GET** /groupClasses/{id} | 
[**getGroupClasses**](GroupClassApi.md#getGroupClasses) | **GET** /groupClasses | 
[**putGroupClass**](GroupClassApi.md#putGroupClass) | **PUT** /groupClasses/{id} | 
[**registerGroupClass**](GroupClassApi.md#registerGroupClass) | **POST** /groupClasses | 
[**removeTrainer**](GroupClassApi.md#removeTrainer) | **DELETE** /groupClasses/{classId}/trainers | 



## addTrainer

> GroupClass addTrainer(addTrainerRequest, classId)



Add new trainer to group class

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.GroupClassApi();
let addTrainerRequest = new FitnessCenterBackendApi.AddTrainerRequest(); // AddTrainerRequest | 
let classId = 1; // Number | ID of the class to add trainer to
apiInstance.addTrainer(addTrainerRequest, classId, (error, data, response) => {
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
 **addTrainerRequest** | [**AddTrainerRequest**](AddTrainerRequest.md)|  | 
 **classId** | **Number**| ID of the class to add trainer to | 

### Return type

[**GroupClass**](GroupClass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGroupClass

> deleteGroupClass(id)



Delete class by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.GroupClassApi();
let id = 1; // Number | ID of the class to delete
apiInstance.deleteGroupClass(id, (error, data, response) => {
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
 **id** | **Number**| ID of the class to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getGroupClass

> GroupClass getGroupClass(id)



Get class by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.GroupClassApi();
let id = 1; // Number | ID of the class to retrieve
apiInstance.getGroupClass(id, (error, data, response) => {
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
 **id** | **Number**| ID of the class to retrieve | 

### Return type

[**GroupClass**](GroupClass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroupClasses

> [GroupClass] getGroupClasses()



Get all classes

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.GroupClassApi();
apiInstance.getGroupClasses((error, data, response) => {
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

[**[GroupClass]**](GroupClass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putGroupClass

> GroupClass putGroupClass(groupClass, id)



Put group class by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.GroupClassApi();
let groupClass = new FitnessCenterBackendApi.GroupClass(); // GroupClass | 
let id = 1; // Number | ID of the group class to put
apiInstance.putGroupClass(groupClass, id, (error, data, response) => {
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
 **groupClass** | [**GroupClass**](GroupClass.md)|  | 
 **id** | **Number**| ID of the group class to put | 

### Return type

[**GroupClass**](GroupClass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerGroupClass

> GroupClass registerGroupClass(groupClass)



Register new class

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.GroupClassApi();
let groupClass = new FitnessCenterBackendApi.GroupClass(); // GroupClass | 
apiInstance.registerGroupClass(groupClass, (error, data, response) => {
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
 **groupClass** | [**GroupClass**](GroupClass.md)|  | 

### Return type

[**GroupClass**](GroupClass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeTrainer

> removeTrainer(addTrainerRequest, classId)



Remove trainer from group class

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.GroupClassApi();
let addTrainerRequest = new FitnessCenterBackendApi.AddTrainerRequest(); // AddTrainerRequest | 
let classId = 1; // Number | ID of the class to remove trainer from
apiInstance.removeTrainer(addTrainerRequest, classId, (error, data, response) => {
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
 **addTrainerRequest** | [**AddTrainerRequest**](AddTrainerRequest.md)|  | 
 **classId** | **Number**| ID of the class to remove trainer from | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

