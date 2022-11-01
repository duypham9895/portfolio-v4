export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Upload: any;
}

export interface BooleanFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  contains?: InputMaybe<Scalars["Boolean"]>;
  containsi?: InputMaybe<Scalars["Boolean"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]>;
  eq?: InputMaybe<Scalars["Boolean"]>;
  eqi?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  startsWith?: InputMaybe<Scalars["Boolean"]>;
}

export interface Contact {
  __typename?: "Contact";
  address?: Maybe<Scalars["String"]>;
  address_url?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
}

export interface ContactEntity {
  __typename?: "ContactEntity";
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars["ID"]>;
}

export interface ContactEntityResponse {
  __typename?: "ContactEntityResponse";
  data?: Maybe<ContactEntity>;
}

export interface ContactEntityResponseCollection {
  __typename?: "ContactEntityResponseCollection";
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
}

export interface ContactFiltersInput {
  address?: InputMaybe<StringFilterInput>;
  address_url?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface ContactInput {
  address?: InputMaybe<Scalars["String"]>;
  address_url?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
}

export interface Course {
  __typename?: "Course";
  createdAt?: Maybe<Scalars["DateTime"]>;
  credential_id?: Maybe<Scalars["String"]>;
  credential_url?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["Date"]>;
  name?: Maybe<Scalars["String"]>;
  organization?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  start_date?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
}

export interface CourseEntity {
  __typename?: "CourseEntity";
  attributes?: Maybe<Course>;
  id?: Maybe<Scalars["ID"]>;
}

export interface CourseEntityResponse {
  __typename?: "CourseEntityResponse";
  data?: Maybe<CourseEntity>;
}

export interface CourseEntityResponseCollection {
  __typename?: "CourseEntityResponseCollection";
  data: Array<CourseEntity>;
  meta: ResponseCollectionMeta;
}

export interface CourseFiltersInput {
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  credential_id?: InputMaybe<StringFilterInput>;
  credential_url?: InputMaybe<StringFilterInput>;
  end_date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CourseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  organization?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  start_date?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface CourseInput {
  credential_id?: InputMaybe<Scalars["String"]>;
  credential_url?: InputMaybe<Scalars["String"]>;
  end_date?: InputMaybe<Scalars["Date"]>;
  name?: InputMaybe<Scalars["String"]>;
  organization?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  start_date?: InputMaybe<Scalars["Date"]>;
}

export interface DateFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  contains?: InputMaybe<Scalars["Date"]>;
  containsi?: InputMaybe<Scalars["Date"]>;
  endsWith?: InputMaybe<Scalars["Date"]>;
  eq?: InputMaybe<Scalars["Date"]>;
  eqi?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  ne?: InputMaybe<Scalars["Date"]>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars["Date"]>;
  notContainsi?: InputMaybe<Scalars["Date"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  startsWith?: InputMaybe<Scalars["Date"]>;
}

export interface DateTimeFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]>;
  containsi?: InputMaybe<Scalars["DateTime"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]>;
  eq?: InputMaybe<Scalars["DateTime"]>;
  eqi?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  ne?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]>;
}

export interface Education {
  __typename?: "Education";
  createdAt?: Maybe<Scalars["DateTime"]>;
  degree?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["Date"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  school?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
}

export interface EducationEntity {
  __typename?: "EducationEntity";
  attributes?: Maybe<Education>;
  id?: Maybe<Scalars["ID"]>;
}

export interface EducationEntityResponse {
  __typename?: "EducationEntityResponse";
  data?: Maybe<EducationEntity>;
}

export interface EducationEntityResponseCollection {
  __typename?: "EducationEntityResponseCollection";
  data: Array<EducationEntity>;
  meta: ResponseCollectionMeta;
}

export interface EducationFiltersInput {
  and?: InputMaybe<Array<InputMaybe<EducationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  degree?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  end_date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EducationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EducationFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  school?: InputMaybe<StringFilterInput>;
  start_date?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface EducationInput {
  degree?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_date?: InputMaybe<Scalars["Date"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  school?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["Date"]>;
}

export interface Experience {
  __typename?: "Experience";
  company_name: Scalars["String"];
  company_url?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["Date"]>;
  job_title: Scalars["String"];
  publishedAt?: Maybe<Scalars["DateTime"]>;
  start_date: Scalars["Date"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
}

export interface ExperienceEntity {
  __typename?: "ExperienceEntity";
  attributes?: Maybe<Experience>;
  id?: Maybe<Scalars["ID"]>;
}

export interface ExperienceEntityResponse {
  __typename?: "ExperienceEntityResponse";
  data?: Maybe<ExperienceEntity>;
}

export interface ExperienceEntityResponseCollection {
  __typename?: "ExperienceEntityResponseCollection";
  data: Array<ExperienceEntity>;
  meta: ResponseCollectionMeta;
}

export interface ExperienceFiltersInput {
  and?: InputMaybe<Array<InputMaybe<ExperienceFiltersInput>>>;
  company_name?: InputMaybe<StringFilterInput>;
  company_url?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  end_date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  job_title?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ExperienceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ExperienceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  start_date?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface ExperienceInput {
  company_name?: InputMaybe<Scalars["String"]>;
  company_url?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_date?: InputMaybe<Scalars["Date"]>;
  job_title?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  start_date?: InputMaybe<Scalars["Date"]>;
}

export interface FileInfoInput {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
}

export interface FloatFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  contains?: InputMaybe<Scalars["Float"]>;
  containsi?: InputMaybe<Scalars["Float"]>;
  endsWith?: InputMaybe<Scalars["Float"]>;
  eq?: InputMaybe<Scalars["Float"]>;
  eqi?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]>;
  notContainsi?: InputMaybe<Scalars["Float"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]>;
}

export type GenericMorph =
  | Contact
  | Course
  | Education
  | Experience
  | I18NLocale
  | Personal
  | Skill
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export interface I18NLocale {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
}

export interface I18NLocaleEntity {
  __typename?: "I18NLocaleEntity";
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars["ID"]>;
}

export interface I18NLocaleEntityResponse {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
}

export interface I18NLocaleEntityResponseCollection {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
}

export interface I18NLocaleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface IdFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contains?: InputMaybe<Scalars["ID"]>;
  containsi?: InputMaybe<Scalars["ID"]>;
  endsWith?: InputMaybe<Scalars["ID"]>;
  eq?: InputMaybe<Scalars["ID"]>;
  eqi?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  ne?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]>;
  notContainsi?: InputMaybe<Scalars["ID"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]>;
}

export interface IntFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  contains?: InputMaybe<Scalars["Int"]>;
  containsi?: InputMaybe<Scalars["Int"]>;
  endsWith?: InputMaybe<Scalars["Int"]>;
  eq?: InputMaybe<Scalars["Int"]>;
  eqi?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]>;
  notContainsi?: InputMaybe<Scalars["Int"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]>;
}

export interface JsonFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  contains?: InputMaybe<Scalars["JSON"]>;
  containsi?: InputMaybe<Scalars["JSON"]>;
  endsWith?: InputMaybe<Scalars["JSON"]>;
  eq?: InputMaybe<Scalars["JSON"]>;
  eqi?: InputMaybe<Scalars["JSON"]>;
  gt?: InputMaybe<Scalars["JSON"]>;
  gte?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  lt?: InputMaybe<Scalars["JSON"]>;
  lte?: InputMaybe<Scalars["JSON"]>;
  ne?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]>;
}

export interface Mutation {
  __typename?: "Mutation";
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createContact?: Maybe<ContactEntityResponse>;
  createCourse?: Maybe<CourseEntityResponse>;
  createEducation?: Maybe<EducationEntityResponse>;
  createExperience?: Maybe<ExperienceEntityResponse>;
  createPersonal?: Maybe<PersonalEntityResponse>;
  createSkill?: Maybe<SkillEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteCourse?: Maybe<CourseEntityResponse>;
  deleteEducation?: Maybe<EducationEntityResponse>;
  deleteExperience?: Maybe<ExperienceEntityResponse>;
  deletePersonal?: Maybe<PersonalEntityResponse>;
  deleteSkill?: Maybe<SkillEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateCourse?: Maybe<CourseEntityResponse>;
  updateEducation?: Maybe<EducationEntityResponse>;
  updateExperience?: Maybe<ExperienceEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updatePersonal?: Maybe<PersonalEntityResponse>;
  updateSkill?: Maybe<SkillEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
}

export interface MutationChangePasswordArgs {
  currentPassword: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
}

export interface MutationCreateContactArgs {
  data: ContactInput;
}

export interface MutationCreateCourseArgs {
  data: CourseInput;
}

export interface MutationCreateEducationArgs {
  data: EducationInput;
}

export interface MutationCreateExperienceArgs {
  data: ExperienceInput;
}

export interface MutationCreatePersonalArgs {
  data: PersonalInput;
}

export interface MutationCreateSkillArgs {
  data: SkillInput;
}

export interface MutationCreateUploadFileArgs {
  data: UploadFileInput;
}

export interface MutationCreateUploadFolderArgs {
  data: UploadFolderInput;
}

export interface MutationCreateUsersPermissionsRoleArgs {
  data: UsersPermissionsRoleInput;
}

export interface MutationCreateUsersPermissionsUserArgs {
  data: UsersPermissionsUserInput;
}

export interface MutationDeleteContactArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteCourseArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteEducationArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteExperienceArgs {
  id: Scalars["ID"];
}

export interface MutationDeletePersonalArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteSkillArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteUploadFileArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteUploadFolderArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteUsersPermissionsRoleArgs {
  id: Scalars["ID"];
}

export interface MutationDeleteUsersPermissionsUserArgs {
  id: Scalars["ID"];
}

export interface MutationEmailConfirmationArgs {
  confirmation: Scalars["String"];
}

export interface MutationForgotPasswordArgs {
  email: Scalars["String"];
}

export interface MutationLoginArgs {
  input: UsersPermissionsLoginInput;
}

export interface MutationMultipleUploadArgs {
  field?: InputMaybe<Scalars["String"]>;
  files: Array<InputMaybe<Scalars["Upload"]>>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
}

export interface MutationRegisterArgs {
  input: UsersPermissionsRegisterInput;
}

export interface MutationRemoveFileArgs {
  id: Scalars["ID"];
}

export interface MutationResetPasswordArgs {
  code: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
}

export interface MutationUpdateContactArgs {
  data: ContactInput;
  id: Scalars["ID"];
}

export interface MutationUpdateCourseArgs {
  data: CourseInput;
  id: Scalars["ID"];
}

export interface MutationUpdateEducationArgs {
  data: EducationInput;
  id: Scalars["ID"];
}

export interface MutationUpdateExperienceArgs {
  data: ExperienceInput;
  id: Scalars["ID"];
}

export interface MutationUpdateFileInfoArgs {
  id: Scalars["ID"];
  info?: InputMaybe<FileInfoInput>;
}

export interface MutationUpdatePersonalArgs {
  data: PersonalInput;
  id: Scalars["ID"];
}

export interface MutationUpdateSkillArgs {
  data: SkillInput;
  id: Scalars["ID"];
}

export interface MutationUpdateUploadFileArgs {
  data: UploadFileInput;
  id: Scalars["ID"];
}

export interface MutationUpdateUploadFolderArgs {
  data: UploadFolderInput;
  id: Scalars["ID"];
}

export interface MutationUpdateUsersPermissionsRoleArgs {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"];
}

export interface MutationUpdateUsersPermissionsUserArgs {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"];
}

export interface MutationUploadArgs {
  field?: InputMaybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
}

export interface Pagination {
  __typename?: "Pagination";
  page: Scalars["Int"];
  pageCount: Scalars["Int"];
  pageSize: Scalars["Int"];
  total: Scalars["Int"];
}

export interface PaginationArg {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
}

export interface Personal {
  __typename?: "Personal";
  avatar?: Maybe<UploadFileEntityResponse>;
  birthday?: Maybe<Scalars["Date"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  full_name?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  resume_url?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
}

export interface PersonalEntity {
  __typename?: "PersonalEntity";
  attributes?: Maybe<Personal>;
  id?: Maybe<Scalars["ID"]>;
}

export interface PersonalEntityResponse {
  __typename?: "PersonalEntityResponse";
  data?: Maybe<PersonalEntity>;
}

export interface PersonalEntityResponseCollection {
  __typename?: "PersonalEntityResponseCollection";
  data: Array<PersonalEntity>;
  meta: ResponseCollectionMeta;
}

export interface PersonalFiltersInput {
  and?: InputMaybe<Array<InputMaybe<PersonalFiltersInput>>>;
  birthday?: InputMaybe<DateFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  full_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PersonalFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PersonalFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  resume_url?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface PersonalInput {
  avatar?: InputMaybe<Scalars["ID"]>;
  birthday?: InputMaybe<Scalars["Date"]>;
  description?: InputMaybe<Scalars["String"]>;
  full_name?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  resume_url?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export interface Query {
  __typename?: "Query";
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  courses?: Maybe<CourseEntityResponseCollection>;
  education?: Maybe<EducationEntityResponse>;
  educations?: Maybe<EducationEntityResponseCollection>;
  experience?: Maybe<ExperienceEntityResponse>;
  experiences?: Maybe<ExperienceEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  personal?: Maybe<PersonalEntityResponse>;
  personals?: Maybe<PersonalEntityResponseCollection>;
  skill?: Maybe<SkillEntityResponse>;
  skills?: Maybe<SkillEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
}

export interface QueryContactArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QueryContactsArgs {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface QueryCourseArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QueryCoursesArgs {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface QueryEducationArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QueryEducationsArgs {
  filters?: InputMaybe<EducationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface QueryExperienceArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QueryExperiencesArgs {
  filters?: InputMaybe<ExperienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface QueryI18NLocaleArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QueryI18NLocalesArgs {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface QueryPersonalArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QueryPersonalsArgs {
  filters?: InputMaybe<PersonalFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface QuerySkillArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QuerySkillsArgs {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface QueryUploadFileArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QueryUploadFilesArgs {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface QueryUploadFolderArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QueryUploadFoldersArgs {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface QueryUsersPermissionsRoleArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QueryUsersPermissionsRolesArgs {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface QueryUsersPermissionsUserArgs {
  id?: InputMaybe<Scalars["ID"]>;
}

export interface QueryUsersPermissionsUsersArgs {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface ResponseCollectionMeta {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
}

export interface Skill {
  __typename?: "Skill";
  createdAt?: Maybe<Scalars["DateTime"]>;
  experience_years?: Maybe<Scalars["Float"]>;
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
}

export interface SkillEntity {
  __typename?: "SkillEntity";
  attributes?: Maybe<Skill>;
  id?: Maybe<Scalars["ID"]>;
}

export interface SkillEntityResponse {
  __typename?: "SkillEntityResponse";
  data?: Maybe<SkillEntity>;
}

export interface SkillEntityResponseCollection {
  __typename?: "SkillEntityResponseCollection";
  data: Array<SkillEntity>;
  meta: ResponseCollectionMeta;
}

export interface SkillFiltersInput {
  and?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  experience_years?: InputMaybe<FloatFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SkillFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface SkillInput {
  experience_years?: InputMaybe<Scalars["Float"]>;
  image?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
}

export interface StringFilterInput {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  containsi?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  eqi?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  ne?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]>;
  notContainsi?: InputMaybe<Scalars["String"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  startsWith?: InputMaybe<Scalars["String"]>;
}

export interface UploadFile {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
}

export interface UploadFileEntity {
  __typename?: "UploadFileEntity";
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars["ID"]>;
}

export interface UploadFileEntityResponse {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
}

export interface UploadFileEntityResponseCollection {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
}

export interface UploadFileFiltersInput {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
}

export interface UploadFileInput {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  ext?: InputMaybe<Scalars["String"]>;
  folder?: InputMaybe<Scalars["ID"]>;
  folderPath?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  mime?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  size?: InputMaybe<Scalars["Float"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
}

export interface UploadFileRelationResponseCollection {
  __typename?: "UploadFileRelationResponseCollection";
  data: Array<UploadFileEntity>;
}

export interface UploadFolder {
  __typename?: "UploadFolder";
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars["String"];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars["String"];
  pathId: Scalars["Int"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
}

export interface UploadFolderChildrenArgs {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface UploadFolderFilesArgs {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface UploadFolderEntity {
  __typename?: "UploadFolderEntity";
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars["ID"]>;
}

export interface UploadFolderEntityResponse {
  __typename?: "UploadFolderEntityResponse";
  data?: Maybe<UploadFolderEntity>;
}

export interface UploadFolderEntityResponseCollection {
  __typename?: "UploadFolderEntityResponseCollection";
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
}

export interface UploadFolderFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface UploadFolderInput {
  children?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  parent?: InputMaybe<Scalars["ID"]>;
  path?: InputMaybe<Scalars["String"]>;
  pathId?: InputMaybe<Scalars["Int"]>;
}

export interface UploadFolderRelationResponseCollection {
  __typename?: "UploadFolderRelationResponseCollection";
  data: Array<UploadFolderEntity>;
}

export interface UsersPermissionsCreateRolePayload {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"];
}

export interface UsersPermissionsDeleteRolePayload {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"];
}

export interface UsersPermissionsLoginInput {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Scalars["String"];
}

export interface UsersPermissionsLoginPayload {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
}

export interface UsersPermissionsMe {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"];
}

export interface UsersPermissionsMeRole {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
}

export interface UsersPermissionsPasswordPayload {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
}

export interface UsersPermissionsPermission {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
}

export interface UsersPermissionsPermissionEntity {
  __typename?: "UsersPermissionsPermissionEntity";
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars["ID"]>;
}

export interface UsersPermissionsPermissionFiltersInput {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface UsersPermissionsPermissionRelationResponseCollection {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
}

export interface UsersPermissionsRegisterInput {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
}

export interface UsersPermissionsRole {
  __typename?: "UsersPermissionsRole";
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
}

export interface UsersPermissionsRolePermissionsArgs {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface UsersPermissionsRoleUsersArgs {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface UsersPermissionsRoleEntity {
  __typename?: "UsersPermissionsRoleEntity";
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars["ID"]>;
}

export interface UsersPermissionsRoleEntityResponse {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
}

export interface UsersPermissionsRoleEntityResponseCollection {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
}

export interface UsersPermissionsRoleFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
}

export interface UsersPermissionsRoleInput {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
}

export interface UsersPermissionsUpdateRolePayload {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"];
}

export interface UsersPermissionsUser {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  username: Scalars["String"];
}

export interface UsersPermissionsUserEntity {
  __typename?: "UsersPermissionsUserEntity";
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars["ID"]>;
}

export interface UsersPermissionsUserEntityResponse {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
}

export interface UsersPermissionsUserEntityResponseCollection {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
}

export interface UsersPermissionsUserFiltersInput {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
}

export interface UsersPermissionsUserInput {
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["ID"]>;
  username?: InputMaybe<Scalars["String"]>;
}

export interface UsersPermissionsUserRelationResponseCollection {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
}
