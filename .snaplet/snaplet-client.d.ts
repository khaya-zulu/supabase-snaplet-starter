type Prettify<T> = { [K in keyof T]: T[K]; } & {};
type JsonPrimitive = null | number | string | boolean;
type Nested<V> = V | { [s: string]: V | Nested<V> } | Array<V | Nested<V>>;
type Json = Nested<JsonPrimitive>;
type ScalarField<T> = T | ((context: { index: number, seed: string }) => Promise<T> | T);
type DataField<T> = T | ((context: { index: number, seed: string }) => Promise<T> | T);
type MapScalarField<T extends Record<string, any>> = {
  [K in keyof T]: ScalarField<T[K]>;
};
type Child<T> = Omit<T, "connect">;
type Parent<T> = Omit<T, "count">;
type UserModels = {
  [KStore in keyof Store]?: Store[KStore] extends Array<
    infer TFields extends Record<string, any>
  >
    ? {
        connect?: (ctx: { store: Store }) => TFields;
        data?: Partial<MapScalarField<TFields>>;
      }
    : never;
};
type PlanOptions = { autoConnect?: boolean, models?: UserModels, store?: StoreInstance };
type GetBranch<TGraph extends any[], TPath extends string[]> =
  TGraph extends Array<infer TGraphItem>
    ? TPath extends [infer THead, ...infer TTail]
      ? {
          [K in keyof TGraphItem]: K extends THead
            ? TGraphItem[K] extends Array<any>
              ? TTail extends string[]
                ? GetBranch<TGraphItem[K], TTail>
                : never
              : never
            : TGraphItem[K]
        }
      : never
    : never;
type ModelInputs<
  TFields extends Record<string, any>,
  TParents extends Record<string, any>,
  TChildren extends Record<string, any>,
  TGraph extends any[],
  TPath extends string[] = []
> = { count?: number | ((context: { seed: string }) => number) } & (
  | {
      connect?: (context: { seed: string; index: number; store: Store; graph: TGraph; branch: GetBranch<TGraph, TPath>; }) => TFields;
      data?: never;
    }
  | {
      connect?: never;
      data?: DataField<Partial<MapScalarField<TFields> & TParents & TChildren>>;
    }
);
export interface Plan {
  generate: (initialStore?: Store) => Promise<Store>;
  pipe: Pipe;
  merge: Merge;
}
export type Pipe = (...plans: Plan[]) => Plan;
export type Merge =  (...plans: Plan[]) => Plan;
type StoreInstance<T extends Partial<Store> = {}> = {
  _store: T;
  toSQL: () => string[];
}
export type CreateStore = <T extends Partial<Store>>(initialData?: T, options?: { external: boolean }) => StoreInstance<T>;
type Store = {
  _http_response: _http_responseScalars[];
  audit_log_entries: audit_log_entriesScalars[];
  buckets: bucketsScalars[];
  flow_state: flow_stateScalars[];
  hooks: hooksScalars[];
  http_request_queue: http_request_queueScalars[];
  identities: identitiesScalars[];
  instances: instancesScalars[];
  key: keyScalars[];
  mfa_amr_claims: mfa_amr_claimsScalars[];
  mfa_challenges: mfa_challengesScalars[];
  mfa_factors: mfa_factorsScalars[];
  storage_migrations: storage_migrationsScalars[];
  supabase_functions_migrations: supabase_functions_migrationsScalars[];
  objects: objectsScalars[];
  refresh_tokens: refresh_tokensScalars[];
  saml_providers: saml_providersScalars[];
  saml_relay_states: saml_relay_statesScalars[];
  auth_schema_migrations: auth_schema_migrationsScalars[];
  supabase_migrations_schema_migrations: supabase_migrations_schema_migrationsScalars[];
  secrets: secretsScalars[];
  sessions: sessionsScalars[];
  sso_domains: sso_domainsScalars[];
  sso_providers: sso_providersScalars[];
  todos: todosScalars[];
  users: usersScalars[];
};
type aal_levelEnum = "aal1" | "aal2" | "aal3";
type code_challenge_methodEnum = "plain" | "s256";
type factor_statusEnum = "unverified" | "verified";
type factor_typeEnum = "totp" | "webauthn";
type request_statusEnum = "ERROR" | "PENDING" | "SUCCESS";
type key_statusEnum = "default" | "expired" | "invalid" | "valid";
type key_typeEnum = "aead-det" | "aead-ietf" | "auth" | "generichash" | "hmacsha256" | "hmacsha512" | "kdf" | "secretbox" | "secretstream" | "shorthash" | "stream_xchacha20";
type _http_responseScalars = {
  content: string | null;
  content_type: string | null;
  created?: string;
  error_msg: string | null;
  headers: Json | null;
  id: number | null;
  status_code: number | null;
  timed_out: boolean | null;
}
type _http_responseParents<TGraph extends any[], TPath extends string[] = []> = {

};
type _http_responseChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type _http_responseModel = ModelInputs<_http_responseScalars, _http_responseParents<_http_responseGraph>, _http_responseChildren<_http_responseGraph>, _http_responseGraph>;
type audit_log_entriesScalars = {
  created_at: string | null;
  id: string;
  instance_id: string | null;
  ip_address?: string;
  payload: Json | null;
}
type audit_log_entriesParents<TGraph extends any[], TPath extends string[] = []> = {

};
type audit_log_entriesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type audit_log_entriesModel = ModelInputs<audit_log_entriesScalars, audit_log_entriesParents<audit_log_entriesGraph>, audit_log_entriesChildren<audit_log_entriesGraph>, audit_log_entriesGraph>;
type bucketsScalars = {
  allowed_mime_types: string[] | null;
  avif_autodetection: boolean | null;
  created_at: string | null;
  file_size_limit: number | null;
  id: string;
  name: string;
  owner: string | null;
  public: boolean | null;
  updated_at: string | null;
}
type bucketsParents<TGraph extends any[], TPath extends string[] = []> = {
 users: Parent<ModelInputs<usersScalars, usersParents<TGraph, [...TPath, "users"]>, Omit<usersChildren<TGraph, [...TPath, "users"]>, "buckets">, TGraph, [...TPath, "users"]>>;
};
type bucketsChildren<TGraph extends any[], TPath extends string[] = []> = {
 objects: Child<ModelInputs<objectsScalars, Omit<objectsParents<TGraph, [...TPath, "objects"]>, "buckets">, objectsChildren<TGraph, [...TPath, "objects"]>, TGraph, [...TPath, "objects"]>>;
};
type bucketsModel = ModelInputs<bucketsScalars, bucketsParents<bucketsGraph>, bucketsChildren<bucketsGraph>, bucketsGraph>;
type flow_stateScalars = {
  auth_code: string;
  authentication_method: string;
  code_challenge: string;
  code_challenge_method: code_challenge_methodEnum;
  created_at: string | null;
  id: string;
  provider_access_token: string | null;
  provider_refresh_token: string | null;
  provider_type: string;
  updated_at: string | null;
  user_id: string | null;
}
type flow_stateParents<TGraph extends any[], TPath extends string[] = []> = {

};
type flow_stateChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type flow_stateModel = ModelInputs<flow_stateScalars, flow_stateParents<flow_stateGraph>, flow_stateChildren<flow_stateGraph>, flow_stateGraph>;
type hooksScalars = {
  created_at?: string;
  hook_name: string;
  hook_table_id: number;
  id?: number;
  request_id: number | null;
}
type hooksParents<TGraph extends any[], TPath extends string[] = []> = {

};
type hooksChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type hooksModel = ModelInputs<hooksScalars, hooksParents<hooksGraph>, hooksChildren<hooksGraph>, hooksGraph>;
type http_request_queueScalars = {
  body: string | null;
  headers: Json;
  id?: number;
  method: string;
  timeout_milliseconds: number;
  url: string;
}
type http_request_queueParents<TGraph extends any[], TPath extends string[] = []> = {

};
type http_request_queueChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type http_request_queueModel = ModelInputs<http_request_queueScalars, http_request_queueParents<http_request_queueGraph>, http_request_queueChildren<http_request_queueGraph>, http_request_queueGraph>;
type identitiesScalars = {
  created_at: string | null;
  email?: string | null;
  id: string;
  identity_data: Json;
  last_sign_in_at: string | null;
  provider: string;
  updated_at: string | null;
  user_id: string;
}
type identitiesParents<TGraph extends any[], TPath extends string[] = []> = {
 users: Parent<ModelInputs<usersScalars, usersParents<TGraph, [...TPath, "users"]>, Omit<usersChildren<TGraph, [...TPath, "users"]>, "identities">, TGraph, [...TPath, "users"]>>;
};
type identitiesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type identitiesModel = ModelInputs<Omit<identitiesScalars, "email">, identitiesParents<identitiesGraph>, identitiesChildren<identitiesGraph>, identitiesGraph>;
type instancesScalars = {
  created_at: string | null;
  id: string;
  raw_base_config: string | null;
  updated_at: string | null;
  uuid: string | null;
}
type instancesParents<TGraph extends any[], TPath extends string[] = []> = {

};
type instancesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type instancesModel = ModelInputs<instancesScalars, instancesParents<instancesGraph>, instancesChildren<instancesGraph>, instancesGraph>;
type keyScalars = {
  associated_data: string | null;
  comment: string | null;
  created?: string;
  expires: string | null;
  id?: string;
  key_context: string | null;
  key_id: number | null;
  key_type: key_typeEnum | null;
  name: string | null;
  parent_key: string | null;
  raw_key: string | null;
  raw_key_nonce: string | null;
  status: key_statusEnum | null;
  user_data: string | null;
}
type keyParents<TGraph extends any[], TPath extends string[] = []> = {
 key: Parent<ModelInputs<keyScalars, keyParents<TGraph, [...TPath, "key"]>, Omit<keyChildren<TGraph, [...TPath, "key"]>, "key">, TGraph, [...TPath, "key"]>>;
};
type keyChildren<TGraph extends any[], TPath extends string[] = []> = {
 key: Child<ModelInputs<keyScalars, Omit<keyParents<TGraph, [...TPath, "key"]>, "key">, keyChildren<TGraph, [...TPath, "key"]>, TGraph, [...TPath, "key"]>>;
 secrets: Child<ModelInputs<secretsScalars, Omit<secretsParents<TGraph, [...TPath, "secrets"]>, "key">, secretsChildren<TGraph, [...TPath, "secrets"]>, TGraph, [...TPath, "secrets"]>>;
};
type keyModel = ModelInputs<keyScalars, keyParents<keyGraph>, keyChildren<keyGraph>, keyGraph>;
type mfa_amr_claimsScalars = {
  authentication_method: string;
  created_at: string;
  id: string;
  session_id: string;
  updated_at: string;
}
type mfa_amr_claimsParents<TGraph extends any[], TPath extends string[] = []> = {
 sessions: Parent<ModelInputs<sessionsScalars, sessionsParents<TGraph, [...TPath, "sessions"]>, Omit<sessionsChildren<TGraph, [...TPath, "sessions"]>, "mfa_amr_claims">, TGraph, [...TPath, "sessions"]>>;
};
type mfa_amr_claimsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type mfa_amr_claimsModel = ModelInputs<mfa_amr_claimsScalars, mfa_amr_claimsParents<mfa_amr_claimsGraph>, mfa_amr_claimsChildren<mfa_amr_claimsGraph>, mfa_amr_claimsGraph>;
type mfa_challengesScalars = {
  created_at: string;
  factor_id: string;
  id: string;
  ip_address: string;
  verified_at: string | null;
}
type mfa_challengesParents<TGraph extends any[], TPath extends string[] = []> = {
 mfa_factors: Parent<ModelInputs<mfa_factorsScalars, mfa_factorsParents<TGraph, [...TPath, "mfa_factors"]>, Omit<mfa_factorsChildren<TGraph, [...TPath, "mfa_factors"]>, "mfa_challenges">, TGraph, [...TPath, "mfa_factors"]>>;
};
type mfa_challengesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type mfa_challengesModel = ModelInputs<mfa_challengesScalars, mfa_challengesParents<mfa_challengesGraph>, mfa_challengesChildren<mfa_challengesGraph>, mfa_challengesGraph>;
type mfa_factorsScalars = {
  created_at: string;
  factor_type: factor_typeEnum;
  friendly_name: string | null;
  id: string;
  secret: string | null;
  status: factor_statusEnum;
  updated_at: string;
  user_id: string;
}
type mfa_factorsParents<TGraph extends any[], TPath extends string[] = []> = {
 users: Parent<ModelInputs<usersScalars, usersParents<TGraph, [...TPath, "users"]>, Omit<usersChildren<TGraph, [...TPath, "users"]>, "mfa_factors">, TGraph, [...TPath, "users"]>>;
};
type mfa_factorsChildren<TGraph extends any[], TPath extends string[] = []> = {
 mfa_challenges: Child<ModelInputs<mfa_challengesScalars, Omit<mfa_challengesParents<TGraph, [...TPath, "mfa_challenges"]>, "mfa_factors">, mfa_challengesChildren<TGraph, [...TPath, "mfa_challenges"]>, TGraph, [...TPath, "mfa_challenges"]>>;
};
type mfa_factorsModel = ModelInputs<mfa_factorsScalars, mfa_factorsParents<mfa_factorsGraph>, mfa_factorsChildren<mfa_factorsGraph>, mfa_factorsGraph>;
type storage_migrationsScalars = {
  executed_at: string | null;
  hash: string;
  id: number;
  name: string;
}
type storage_migrationsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type storage_migrationsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type storage_migrationsModel = ModelInputs<storage_migrationsScalars, storage_migrationsParents<storage_migrationsGraph>, storage_migrationsChildren<storage_migrationsGraph>, storage_migrationsGraph>;
type supabase_functions_migrationsScalars = {
  inserted_at?: string;
  version: string;
}
type supabase_functions_migrationsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type supabase_functions_migrationsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type supabase_functions_migrationsModel = ModelInputs<supabase_functions_migrationsScalars, supabase_functions_migrationsParents<supabase_functions_migrationsGraph>, supabase_functions_migrationsChildren<supabase_functions_migrationsGraph>, supabase_functions_migrationsGraph>;
type objectsScalars = {
  bucket_id: string | null;
  created_at: string | null;
  id?: string;
  last_accessed_at: string | null;
  metadata: Json | null;
  name: string | null;
  owner: string | null;
  path_tokens?: string[] | null;
  updated_at: string | null;
  version: string | null;
}
type objectsParents<TGraph extends any[], TPath extends string[] = []> = {
 buckets: Parent<ModelInputs<bucketsScalars, bucketsParents<TGraph, [...TPath, "buckets"]>, Omit<bucketsChildren<TGraph, [...TPath, "buckets"]>, "objects">, TGraph, [...TPath, "buckets"]>>;
};
type objectsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type objectsModel = ModelInputs<Omit<objectsScalars, "path_tokens">, objectsParents<objectsGraph>, objectsChildren<objectsGraph>, objectsGraph>;
type refresh_tokensScalars = {
  created_at: string | null;
  id?: number;
  instance_id: string | null;
  parent: string | null;
  revoked: boolean | null;
  session_id: string | null;
  token: string | null;
  updated_at: string | null;
  user_id: string | null;
}
type refresh_tokensParents<TGraph extends any[], TPath extends string[] = []> = {
 sessions: Parent<ModelInputs<sessionsScalars, sessionsParents<TGraph, [...TPath, "sessions"]>, Omit<sessionsChildren<TGraph, [...TPath, "sessions"]>, "refresh_tokens">, TGraph, [...TPath, "sessions"]>>;
};
type refresh_tokensChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type refresh_tokensModel = ModelInputs<refresh_tokensScalars, refresh_tokensParents<refresh_tokensGraph>, refresh_tokensChildren<refresh_tokensGraph>, refresh_tokensGraph>;
type saml_providersScalars = {
  attribute_mapping: Json | null;
  created_at: string | null;
  entity_id: string;
  id: string;
  metadata_url: string | null;
  metadata_xml: string;
  sso_provider_id: string;
  updated_at: string | null;
}
type saml_providersParents<TGraph extends any[], TPath extends string[] = []> = {
 sso_providers: Parent<ModelInputs<sso_providersScalars, sso_providersParents<TGraph, [...TPath, "sso_providers"]>, Omit<sso_providersChildren<TGraph, [...TPath, "sso_providers"]>, "saml_providers">, TGraph, [...TPath, "sso_providers"]>>;
};
type saml_providersChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type saml_providersModel = ModelInputs<saml_providersScalars, saml_providersParents<saml_providersGraph>, saml_providersChildren<saml_providersGraph>, saml_providersGraph>;
type saml_relay_statesScalars = {
  created_at: string | null;
  for_email: string | null;
  from_ip_address: string | null;
  id: string;
  redirect_to: string | null;
  request_id: string;
  sso_provider_id: string;
  updated_at: string | null;
}
type saml_relay_statesParents<TGraph extends any[], TPath extends string[] = []> = {
 sso_providers: Parent<ModelInputs<sso_providersScalars, sso_providersParents<TGraph, [...TPath, "sso_providers"]>, Omit<sso_providersChildren<TGraph, [...TPath, "sso_providers"]>, "saml_relay_states">, TGraph, [...TPath, "sso_providers"]>>;
};
type saml_relay_statesChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type saml_relay_statesModel = ModelInputs<saml_relay_statesScalars, saml_relay_statesParents<saml_relay_statesGraph>, saml_relay_statesChildren<saml_relay_statesGraph>, saml_relay_statesGraph>;
type auth_schema_migrationsScalars = {
  version: string;
}
type auth_schema_migrationsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type auth_schema_migrationsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type auth_schema_migrationsModel = ModelInputs<auth_schema_migrationsScalars, auth_schema_migrationsParents<auth_schema_migrationsGraph>, auth_schema_migrationsChildren<auth_schema_migrationsGraph>, auth_schema_migrationsGraph>;
type supabase_migrations_schema_migrationsScalars = {
  name: string | null;
  statements: string[] | null;
  version: string;
}
type supabase_migrations_schema_migrationsParents<TGraph extends any[], TPath extends string[] = []> = {

};
type supabase_migrations_schema_migrationsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type supabase_migrations_schema_migrationsModel = ModelInputs<supabase_migrations_schema_migrationsScalars, supabase_migrations_schema_migrationsParents<supabase_migrations_schema_migrationsGraph>, supabase_migrations_schema_migrationsChildren<supabase_migrations_schema_migrationsGraph>, supabase_migrations_schema_migrationsGraph>;
type secretsScalars = {
  created_at?: string;
  description?: string;
  id?: string;
  key_id: string | null;
  name: string | null;
  nonce: string | null;
  secret: string;
  updated_at?: string;
}
type secretsParents<TGraph extends any[], TPath extends string[] = []> = {
 key: Parent<ModelInputs<keyScalars, keyParents<TGraph, [...TPath, "key"]>, Omit<keyChildren<TGraph, [...TPath, "key"]>, "secrets">, TGraph, [...TPath, "key"]>>;
};
type secretsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type secretsModel = ModelInputs<secretsScalars, secretsParents<secretsGraph>, secretsChildren<secretsGraph>, secretsGraph>;
type sessionsScalars = {
  aal: aal_levelEnum | null;
  created_at: string | null;
  factor_id: string | null;
  id: string;
  not_after: string | null;
  updated_at: string | null;
  user_id: string;
}
type sessionsParents<TGraph extends any[], TPath extends string[] = []> = {
 users: Parent<ModelInputs<usersScalars, usersParents<TGraph, [...TPath, "users"]>, Omit<usersChildren<TGraph, [...TPath, "users"]>, "sessions">, TGraph, [...TPath, "users"]>>;
};
type sessionsChildren<TGraph extends any[], TPath extends string[] = []> = {
 mfa_amr_claims: Child<ModelInputs<mfa_amr_claimsScalars, Omit<mfa_amr_claimsParents<TGraph, [...TPath, "mfa_amr_claims"]>, "sessions">, mfa_amr_claimsChildren<TGraph, [...TPath, "mfa_amr_claims"]>, TGraph, [...TPath, "mfa_amr_claims"]>>;
 refresh_tokens: Child<ModelInputs<refresh_tokensScalars, Omit<refresh_tokensParents<TGraph, [...TPath, "refresh_tokens"]>, "sessions">, refresh_tokensChildren<TGraph, [...TPath, "refresh_tokens"]>, TGraph, [...TPath, "refresh_tokens"]>>;
};
type sessionsModel = ModelInputs<sessionsScalars, sessionsParents<sessionsGraph>, sessionsChildren<sessionsGraph>, sessionsGraph>;
type sso_domainsScalars = {
  created_at: string | null;
  domain: string;
  id: string;
  sso_provider_id: string;
  updated_at: string | null;
}
type sso_domainsParents<TGraph extends any[], TPath extends string[] = []> = {
 sso_providers: Parent<ModelInputs<sso_providersScalars, sso_providersParents<TGraph, [...TPath, "sso_providers"]>, Omit<sso_providersChildren<TGraph, [...TPath, "sso_providers"]>, "sso_domains">, TGraph, [...TPath, "sso_providers"]>>;
};
type sso_domainsChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type sso_domainsModel = ModelInputs<sso_domainsScalars, sso_domainsParents<sso_domainsGraph>, sso_domainsChildren<sso_domainsGraph>, sso_domainsGraph>;
type sso_providersScalars = {
  created_at: string | null;
  id: string;
  resource_id: string | null;
  updated_at: string | null;
}
type sso_providersParents<TGraph extends any[], TPath extends string[] = []> = {

};
type sso_providersChildren<TGraph extends any[], TPath extends string[] = []> = {
 saml_providers: Child<ModelInputs<saml_providersScalars, Omit<saml_providersParents<TGraph, [...TPath, "saml_providers"]>, "sso_providers">, saml_providersChildren<TGraph, [...TPath, "saml_providers"]>, TGraph, [...TPath, "saml_providers"]>>;
 saml_relay_states: Child<ModelInputs<saml_relay_statesScalars, Omit<saml_relay_statesParents<TGraph, [...TPath, "saml_relay_states"]>, "sso_providers">, saml_relay_statesChildren<TGraph, [...TPath, "saml_relay_states"]>, TGraph, [...TPath, "saml_relay_states"]>>;
 sso_domains: Child<ModelInputs<sso_domainsScalars, Omit<sso_domainsParents<TGraph, [...TPath, "sso_domains"]>, "sso_providers">, sso_domainsChildren<TGraph, [...TPath, "sso_domains"]>, TGraph, [...TPath, "sso_domains"]>>;
};
type sso_providersModel = ModelInputs<sso_providersScalars, sso_providersParents<sso_providersGraph>, sso_providersChildren<sso_providersGraph>, sso_providersGraph>;
type todosScalars = {
  created_at?: string;
  id?: string;
  is_complete: boolean | null;
  title: string | null;
  user_id: string | null;
}
type todosParents<TGraph extends any[], TPath extends string[] = []> = {
 users: Parent<ModelInputs<usersScalars, usersParents<TGraph, [...TPath, "users"]>, Omit<usersChildren<TGraph, [...TPath, "users"]>, "todos">, TGraph, [...TPath, "users"]>>;
};
type todosChildren<TGraph extends any[], TPath extends string[] = []> = {

};
type todosModel = ModelInputs<todosScalars, todosParents<todosGraph>, todosChildren<todosGraph>, todosGraph>;
type usersScalars = {
  aud: string | null;
  banned_until: string | null;
  confirmation_sent_at: string | null;
  confirmation_token: string | null;
  confirmed_at?: string | null;
  created_at: string | null;
  deleted_at: string | null;
  email: string | null;
  email_change: string | null;
  email_change_confirm_status: number | null;
  email_change_sent_at: string | null;
  email_change_token_current: string | null;
  email_change_token_new: string | null;
  email_confirmed_at: string | null;
  encrypted_password: string | null;
  id: string;
  instance_id: string | null;
  invited_at: string | null;
  is_sso_user?: boolean;
  is_super_admin: boolean | null;
  last_sign_in_at: string | null;
  phone: string | null;
  phone_change: string | null;
  phone_change_sent_at: string | null;
  phone_change_token: string | null;
  phone_confirmed_at: string | null;
  raw_app_meta_data: Json | null;
  raw_user_meta_data: Json | null;
  reauthentication_sent_at: string | null;
  reauthentication_token: string | null;
  recovery_sent_at: string | null;
  recovery_token: string | null;
  role: string | null;
  updated_at: string | null;
}
type usersParents<TGraph extends any[], TPath extends string[] = []> = {

};
type usersChildren<TGraph extends any[], TPath extends string[] = []> = {
 identities: Child<ModelInputs<identitiesScalars, Omit<identitiesParents<TGraph, [...TPath, "identities"]>, "users">, identitiesChildren<TGraph, [...TPath, "identities"]>, TGraph, [...TPath, "identities"]>>;
 mfa_factors: Child<ModelInputs<mfa_factorsScalars, Omit<mfa_factorsParents<TGraph, [...TPath, "mfa_factors"]>, "users">, mfa_factorsChildren<TGraph, [...TPath, "mfa_factors"]>, TGraph, [...TPath, "mfa_factors"]>>;
 sessions: Child<ModelInputs<sessionsScalars, Omit<sessionsParents<TGraph, [...TPath, "sessions"]>, "users">, sessionsChildren<TGraph, [...TPath, "sessions"]>, TGraph, [...TPath, "sessions"]>>;
 todos: Child<ModelInputs<todosScalars, Omit<todosParents<TGraph, [...TPath, "todos"]>, "users">, todosChildren<TGraph, [...TPath, "todos"]>, TGraph, [...TPath, "todos"]>>;
 buckets: Child<ModelInputs<bucketsScalars, Omit<bucketsParents<TGraph, [...TPath, "buckets"]>, "users">, bucketsChildren<TGraph, [...TPath, "buckets"]>, TGraph, [...TPath, "buckets"]>>;
};
type usersModel = ModelInputs<Omit<usersScalars, "confirmed_at">, usersParents<usersGraph>, usersChildren<usersGraph>, usersGraph>;
type _http_responseParentsGraph = {

};
type _http_responseChildrenGraph = {

};
type _http_responseGraph = Array<_http_responseScalars & _http_responseParentsGraph & _http_responseChildrenGraph>;
type audit_log_entriesParentsGraph = {

};
type audit_log_entriesChildrenGraph = {

};
type audit_log_entriesGraph = Array<audit_log_entriesScalars & audit_log_entriesParentsGraph & audit_log_entriesChildrenGraph>;
type bucketsParentsGraph = {
 users: Array<Omit<usersGraph[number], "buckets">>;
};
type bucketsChildrenGraph = {
 objects: Array<Omit<objectsGraph[number], "buckets">>;
};
type bucketsGraph = Array<bucketsScalars & bucketsParentsGraph & bucketsChildrenGraph>;
type flow_stateParentsGraph = {

};
type flow_stateChildrenGraph = {

};
type flow_stateGraph = Array<flow_stateScalars & flow_stateParentsGraph & flow_stateChildrenGraph>;
type hooksParentsGraph = {

};
type hooksChildrenGraph = {

};
type hooksGraph = Array<hooksScalars & hooksParentsGraph & hooksChildrenGraph>;
type http_request_queueParentsGraph = {

};
type http_request_queueChildrenGraph = {

};
type http_request_queueGraph = Array<http_request_queueScalars & http_request_queueParentsGraph & http_request_queueChildrenGraph>;
type identitiesParentsGraph = {
 users: Array<Omit<usersGraph[number], "identities">>;
};
type identitiesChildrenGraph = {

};
type identitiesGraph = Array<identitiesScalars & identitiesParentsGraph & identitiesChildrenGraph>;
type instancesParentsGraph = {

};
type instancesChildrenGraph = {

};
type instancesGraph = Array<instancesScalars & instancesParentsGraph & instancesChildrenGraph>;
type keyParentsGraph = {
 key: Array<Omit<keyGraph[number], "key">>;
};
type keyChildrenGraph = {
 key: Array<Omit<keyGraph[number], "key">>;
 secrets: Array<Omit<secretsGraph[number], "key">>;
};
type keyGraph = Array<keyScalars & keyParentsGraph & keyChildrenGraph>;
type mfa_amr_claimsParentsGraph = {
 sessions: Array<Omit<sessionsGraph[number], "mfa_amr_claims">>;
};
type mfa_amr_claimsChildrenGraph = {

};
type mfa_amr_claimsGraph = Array<mfa_amr_claimsScalars & mfa_amr_claimsParentsGraph & mfa_amr_claimsChildrenGraph>;
type mfa_challengesParentsGraph = {
 mfa_factors: Array<Omit<mfa_factorsGraph[number], "mfa_challenges">>;
};
type mfa_challengesChildrenGraph = {

};
type mfa_challengesGraph = Array<mfa_challengesScalars & mfa_challengesParentsGraph & mfa_challengesChildrenGraph>;
type mfa_factorsParentsGraph = {
 users: Array<Omit<usersGraph[number], "mfa_factors">>;
};
type mfa_factorsChildrenGraph = {
 mfa_challenges: Array<Omit<mfa_challengesGraph[number], "mfa_factors">>;
};
type mfa_factorsGraph = Array<mfa_factorsScalars & mfa_factorsParentsGraph & mfa_factorsChildrenGraph>;
type storage_migrationsParentsGraph = {

};
type storage_migrationsChildrenGraph = {

};
type storage_migrationsGraph = Array<storage_migrationsScalars & storage_migrationsParentsGraph & storage_migrationsChildrenGraph>;
type supabase_functions_migrationsParentsGraph = {

};
type supabase_functions_migrationsChildrenGraph = {

};
type supabase_functions_migrationsGraph = Array<supabase_functions_migrationsScalars & supabase_functions_migrationsParentsGraph & supabase_functions_migrationsChildrenGraph>;
type objectsParentsGraph = {
 buckets: Array<Omit<bucketsGraph[number], "objects">>;
};
type objectsChildrenGraph = {

};
type objectsGraph = Array<objectsScalars & objectsParentsGraph & objectsChildrenGraph>;
type refresh_tokensParentsGraph = {
 sessions: Array<Omit<sessionsGraph[number], "refresh_tokens">>;
};
type refresh_tokensChildrenGraph = {

};
type refresh_tokensGraph = Array<refresh_tokensScalars & refresh_tokensParentsGraph & refresh_tokensChildrenGraph>;
type saml_providersParentsGraph = {
 sso_providers: Array<Omit<sso_providersGraph[number], "saml_providers">>;
};
type saml_providersChildrenGraph = {

};
type saml_providersGraph = Array<saml_providersScalars & saml_providersParentsGraph & saml_providersChildrenGraph>;
type saml_relay_statesParentsGraph = {
 sso_providers: Array<Omit<sso_providersGraph[number], "saml_relay_states">>;
};
type saml_relay_statesChildrenGraph = {

};
type saml_relay_statesGraph = Array<saml_relay_statesScalars & saml_relay_statesParentsGraph & saml_relay_statesChildrenGraph>;
type auth_schema_migrationsParentsGraph = {

};
type auth_schema_migrationsChildrenGraph = {

};
type auth_schema_migrationsGraph = Array<auth_schema_migrationsScalars & auth_schema_migrationsParentsGraph & auth_schema_migrationsChildrenGraph>;
type supabase_migrations_schema_migrationsParentsGraph = {

};
type supabase_migrations_schema_migrationsChildrenGraph = {

};
type supabase_migrations_schema_migrationsGraph = Array<supabase_migrations_schema_migrationsScalars & supabase_migrations_schema_migrationsParentsGraph & supabase_migrations_schema_migrationsChildrenGraph>;
type secretsParentsGraph = {
 key: Array<Omit<keyGraph[number], "secrets">>;
};
type secretsChildrenGraph = {

};
type secretsGraph = Array<secretsScalars & secretsParentsGraph & secretsChildrenGraph>;
type sessionsParentsGraph = {
 users: Array<Omit<usersGraph[number], "sessions">>;
};
type sessionsChildrenGraph = {
 mfa_amr_claims: Array<Omit<mfa_amr_claimsGraph[number], "sessions">>;
 refresh_tokens: Array<Omit<refresh_tokensGraph[number], "sessions">>;
};
type sessionsGraph = Array<sessionsScalars & sessionsParentsGraph & sessionsChildrenGraph>;
type sso_domainsParentsGraph = {
 sso_providers: Array<Omit<sso_providersGraph[number], "sso_domains">>;
};
type sso_domainsChildrenGraph = {

};
type sso_domainsGraph = Array<sso_domainsScalars & sso_domainsParentsGraph & sso_domainsChildrenGraph>;
type sso_providersParentsGraph = {

};
type sso_providersChildrenGraph = {
 saml_providers: Array<Omit<saml_providersGraph[number], "sso_providers">>;
 saml_relay_states: Array<Omit<saml_relay_statesGraph[number], "sso_providers">>;
 sso_domains: Array<Omit<sso_domainsGraph[number], "sso_providers">>;
};
type sso_providersGraph = Array<sso_providersScalars & sso_providersParentsGraph & sso_providersChildrenGraph>;
type todosParentsGraph = {
 users: Array<Omit<usersGraph[number], "todos">>;
};
type todosChildrenGraph = {

};
type todosGraph = Array<todosScalars & todosParentsGraph & todosChildrenGraph>;
type usersParentsGraph = {

};
type usersChildrenGraph = {
 identities: Array<Omit<identitiesGraph[number], "users">>;
 mfa_factors: Array<Omit<mfa_factorsGraph[number], "users">>;
 sessions: Array<Omit<sessionsGraph[number], "users">>;
 todos: Array<Omit<todosGraph[number], "users">>;
 buckets: Array<Omit<bucketsGraph[number], "users">>;
};
type usersGraph = Array<usersScalars & usersParentsGraph & usersChildrenGraph>;
export type SnapletClient = {
  _http_response: (inputs: _http_responseModel, options?: PlanOptions) => Plan;
  audit_log_entries: (inputs: audit_log_entriesModel, options?: PlanOptions) => Plan;
  buckets: (inputs: bucketsModel, options?: PlanOptions) => Plan;
  flow_state: (inputs: flow_stateModel, options?: PlanOptions) => Plan;
  hooks: (inputs: hooksModel, options?: PlanOptions) => Plan;
  http_request_queue: (inputs: http_request_queueModel, options?: PlanOptions) => Plan;
  identities: (inputs: identitiesModel, options?: PlanOptions) => Plan;
  instances: (inputs: instancesModel, options?: PlanOptions) => Plan;
  key: (inputs: keyModel, options?: PlanOptions) => Plan;
  mfa_amr_claims: (inputs: mfa_amr_claimsModel, options?: PlanOptions) => Plan;
  mfa_challenges: (inputs: mfa_challengesModel, options?: PlanOptions) => Plan;
  mfa_factors: (inputs: mfa_factorsModel, options?: PlanOptions) => Plan;
  storage_migrations: (inputs: storage_migrationsModel, options?: PlanOptions) => Plan;
  supabase_functions_migrations: (inputs: supabase_functions_migrationsModel, options?: PlanOptions) => Plan;
  objects: (inputs: objectsModel, options?: PlanOptions) => Plan;
  refresh_tokens: (inputs: refresh_tokensModel, options?: PlanOptions) => Plan;
  saml_providers: (inputs: saml_providersModel, options?: PlanOptions) => Plan;
  saml_relay_states: (inputs: saml_relay_statesModel, options?: PlanOptions) => Plan;
  auth_schema_migrations: (inputs: auth_schema_migrationsModel, options?: PlanOptions) => Plan;
  supabase_migrations_schema_migrations: (inputs: supabase_migrations_schema_migrationsModel, options?: PlanOptions) => Plan;
  secrets: (inputs: secretsModel, options?: PlanOptions) => Plan;
  sessions: (inputs: sessionsModel, options?: PlanOptions) => Plan;
  sso_domains: (inputs: sso_domainsModel, options?: PlanOptions) => Plan;
  sso_providers: (inputs: sso_providersModel, options?: PlanOptions) => Plan;
  todos: (inputs: todosModel, options?: PlanOptions) => Plan;
  users: (inputs: usersModel, options?: PlanOptions) => Plan;
};