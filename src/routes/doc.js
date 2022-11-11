const doc = {
	openapi: '3.0.0',
	info: {
		title: 'API Test for interview job',
		description: 'The API will provide all necessary information to use in USERS and EMAILS modules, this has CRUD routes and specific routes, this API interacts with a test database, This API is destined only for testing',
		version: '1.0.0',
		contact: {
			email: 'zerodata.aolink@outlook.com'
		}
	},
	servers: [
		{
			url: 'http://localhost:8080/users',
      
		},
		{
			url: 'http://localhost:8080/emails'
		}
	],
	tags: [
		{
			name: 'Users',
			description: 'This EndPoint handles the CRUD necessary for the administration of it'
		},
		{
			name: 'Emails',
			description: 'This EndPoint handles the CRUD routes for sending emails'
		}
	],
	paths: {
		'/request/password/:email': {
			get: {
				tags: [
					'Emails'
				],
				summary: 'Send a code to email given to init process for change password',
				parameters: [
					{
						$ref: '#/components/parameters/email'
					}
				],
				responses: {
					200: {
						description: 'OK, the request has been processed successfully',
						content: {
							'application/json': {
								schema: {
									type: 'string',
									example: {
										status: 200
									}
								}
							}
						}
					},
					401: {
						$ref: '#/components/responses/Unauthorized'
					},
					400: {
						$ref: '#/components/responses/BadRequest'
					},
					500: {
						$ref: '#/components/responses/ServerError'
					},
					404: {
						$ref: '#/components/responses/NotFound'
					},
					409: {
						$ref: '#/components/responses/Conflict'
					}
				}
			}
		},
		'/verify/code': {
			post: {
				tags: [
					'Emails'
				],
				summary: 'it verifies the code given to your email',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/bodyEmailPost'
							}
						}
					}
				},
				responses: {
					200: {
						description: 'OK, the request has been processed successfully',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/bodyEmailResponse'
								}
							}
						}
					},
					401: {
						$ref: '#/components/responses/Unauthorized'
					},
					400: {
						$ref: '#/components/responses/BadRequest'
					},
					500: {
						$ref: '#/components/responses/ServerError'
					},
					404: {
						$ref: '#/components/responses/NotFound'
					},
					409: {
						$ref: '#/components/responses/Conflict'
					}
				}
			}
		},
		'/add': {
			post: {
				tags: [
					'Users'
				],
				summary: 'add a new user to the database',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/bodyUsersPost'
							}
						}
					}
				},
				responses: {
					200: {
						description: 'OK, the request has been processed successfully',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/bodyUsersResponse'
								}
							}
						}
					},
					401: {
						$ref: '#/components/responses/Unauthorized'
					},
					400: {
						$ref: '#/components/responses/BadRequest'
					},
					500: {
						$ref: '#/components/responses/ServerError'
					},
					404: {
						$ref: '#/components/responses/NotFound'
					},
					409: {
						$ref: '#/components/responses/Conflict'
					}
				}
			}
		},
		'/get': {
			get: {
				tags: [
					'Users'
				],
				summary: 'get all users',
				responses: {
					200: {
						description: 'OK, the request has been processed successfully',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/bodyUsersResponse'
								}
							}
						}
					},
					401: {
						$ref: '#/components/responses/Unauthorized'
					},
					400: {
						$ref: '#/components/responses/BadRequest'
					},
					500: {
						$ref: '#/components/responses/ServerError'
					},
					404: {
						$ref: '#/components/responses/NotFound'
					},
					409: {
						$ref: '#/components/responses/Conflict'
					}
				}
			}
		},
		'/get/:email': {
			get: {
				tags: [
					'Users'
				],
				summary: 'get an user by email',
				parameters: [
					{
						$ref: '#/components/parameters/email'
					}
				],
				responses: {
					200: {
						description: 'OK, the request has been processed successfully',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/bodyUsersResponse'
								}
							}
						}
					},
					401: {
						$ref: '#/components/responses/Unauthorized'
					},
					400: {
						$ref: '#/components/responses/BadRequest'
					},
					500: {
						$ref: '#/components/responses/ServerError'
					},
					404: {
						$ref: '#/components/responses/NotFound'
					},
					409: {
						$ref: '#/components/responses/Conflict'
					}
				}
			}
		},
		'/delete': {
			delete: {
				tags: [
					'Users'
				],
				summary: 'Disable a user, this user will be banned and cannot will do anything, only other user can enable this user',
				parameters: [
					{
						$ref: '#/components/parameters/email'
					}
				],
				responses: {
					200: {
						description: 'OK, the request has been processed successfully',
						content: {
							'application/json': {
								schema: {
									type: 'string',
									example: {
										status: 200
									}
								}
							}
						}
					},
					401: {
						$ref: '#/components/responses/Unauthorized'
					},
					400: {
						$ref: '#/components/responses/BadRequest'
					},
					500: {
						$ref: '#/components/responses/ServerError'
					},
					404: {
						$ref: '#/components/responses/NotFound'
					},
					409: {
						$ref: '#/components/responses/Conflict'
					}
				}
			}
		},
		'/update': {
			patch: {
				tags: [
					'Users'
				],
				summary: 'update the email or name of user by id',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/bodyUserPatch'
							}
						}
					}
				},
				responses: {
					200: {
						description: 'OK, the request has been processed successfully',
						content: {
							'application/json': {
								schema: {
									type: 'string',
									example: {
										status: 200
									}
								}
							}
						}
					},
					406: {
						description: 'You cannot update a check list addons by default and add storages, the check list addons by default cannot has storages assigned'
					},
					401: {
						$ref: '#/components/responses/Unauthorized'
					},
					400: {
						$ref: '#/components/responses/BadRequest'
					},
					500: {
						$ref: '#/components/responses/ServerError'
					},
					404: {
						$ref: '#/components/responses/NotFound'
					},
					409: {
						$ref: '#/components/responses/Conflict'
					}
				}
			}
		},
		'/reset-password': {
			patch: {
				tags: [
					'Users'
				],
				summary: 'Change the password with the id temporal email, if is correct, teh temporal email is deleted',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/bodyUserPass'
							}
						}
					},
					required: true
				},
				responses: {
					200: {
						description: 'OK, the request has been processed successfully',
						content: {
							'application/json': {
								schema: {
									type: 'string',
									example: {
										status: 200
									}
								}
							}
						}
					},
					401: {
						$ref: '#/components/responses/Unauthorized'
					},
					400: {
						$ref: '#/components/responses/BadRequest'
					},
					500: {
						$ref: '#/components/responses/ServerError'
					},
					404: {
						$ref: '#/components/responses/NotFound'
					},
					409: {
						$ref: '#/components/responses/Conflict'
					},
					406: {
						description: 'Not acceptable error, error duplicate content not allowed'
					}
				}
			}
		}
	},
	components: {
		securitySchemes: {
			BearerAuth: {
				type: 'http',
				scheme: 'bearer',
				bearerFormat: 'JWT'
			}
		},
		responses: {
			Unauthorized: {
				description: '(Unauthorized) you dont have access to this content or your token is not valir or your token has expired',
				content: {
					'application/json': {
						schema: {
							type: 'string',
							example: {
								body: {
									data: 'null',
									payload: {
										statusCode: 401,
										error: 'Unauthorized',
										message: 'Unauthorized'
									}
								},
								status: 401
							}
						}
					}
				}
			},
			BadRequest: {
				description: '(BadRequest) the data requested is not correct, please check the data that you are sending'
			},
			ServerError: {
				description: '(ServerError) Internal Error has ocurred, please contact with the administrators of this system and try it again more later'
			},
			NotFound: {
				content: {
					'application/json': {
						schema: {
							type: 'string',
							example: 'Cannot get route indicated'
						}
					}
				},
				description: '(NotFound), the route not Found'
			},
			Conflict: {
				description: 'Conflict Error, has ocurred an error trying communicate with the database, the data has not been created either saved, try it again more later',
				content: {
					'application/json': {
						schema: {
							type: 'string',
							example: {
								body: {
									data: 'null',
									payload: {
										statusCode: 409,
										error: 'Conflict error',
										message: 'Error will show through here'
									}
								},
								status: 409
							}
						}
					}
				}
			}
		},
		parameters: {
			email: {
				name: 'email',
				in: 'path',
				description: 'email of user',
				required: true,
				schema: {
					title: 'email'
				}
			},
		},
		schemas: {
			bodyEmailPost:{
				type: 'object',
				properties: {
					email: {
						type: 'string',
						description: 'email of user',
						example: 'zerodata.aolink@outlook.com'
					},
					code: {
						type: 'number',
						description: 'code given to verify',
						example: 34242
					}
				},
			},
			bodyUserPass: {
				type: 'object',
				properties: {
					idTemporalEmail: {
						type: 'number',
						description: 'id of temporal email given when you verify the code',
						example: 1
					},
					email: {
						type: 'string',
						description: 'email of user',
						example: 'zerodata.aolink@outlook.com'
					},
					password: {
						type: 'string',
						description: 'new password of user, password must be 8 characters at least',
						example: 'newPasswordHere'
					},
			
				},
			},
      
			bodyUsersPost: {
				type: 'object',
				properties: {
					name: {
						type: 'string',
						description: 'name of users',
						example: 'Robinson Matias'
					},
					email: {
						type: 'string',
						description: 'email of user',
						example: 'zerodata.aolink@outlook.com'
					},
					password: {
						type: 'string',
						description: 'password of user',
						example: 'password must be 8 characters at least'
					},			
				},
				required: [
					'name',
					'email',
					'password',
				]
			},
			bodyUserPatch:{
				type: 'object',
				properties: {
					name: {
						type: 'string',
						description: 'name of users',
						example: 'Robinson Matias'
					},
					email: {
						type: 'string',
						description: 'email of user',
						example: 'zerodata.aolink@outlook.com'
					},		
					id: {
						type: 'number',
						description: 'pk of user',
						example: 1
					}	
				},
				required: [
					'name',
					'email',
					'id',
				]
			},
      
			bodyEmailResponse:{
				type: 'object',
				properties: {
					id: {
						type: 'number',
						description: 'id of email give for change the password',
						example: 1
					},
					email: {
						type: 'string',
						description: 'email of user',
						example:'zerodata.aolink@outlook.com'
					}
				}
        
			},
			bodyUsersResponse: {
				type: 'object',
				properties: {
					id: {
						type: 'number',
						description: 'pk of user',
						example: 1
					},
					email: {
						type: 'string',
						description: 'email of user',
						example: 'zerodata.aolink@outlook.com'
					},
					name: {
						type: 'string',
						description: 'name of user',
						example: 'Robinson Aguilar'
					},
					status: {
						type: 'boolean',
						description: 'status user if is banned',
						example: true
					},
					createdAt: {
						type: 'string',
						description: 'date of created user',
						example: '2022-11-10'
					},
					updatedAt: {
						type: 'string',
						description: 'date of updated user',
						example: '2022-11-11'
					}
				}
			
			}
		}
	}
};
export default doc;
