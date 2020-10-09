const dev = {
  STRIPE_KEY: "pk_test_51HZIj1I7YdI2ADniHmg0UzMBR9ChxSqkG6dl2dfAhS1NYpceU5nwaU5sbBDPGr4LVgtwtJKSkwWgal9CokR9B8JS00ALHGXFl3",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-vn"
  },
  apiGateway: {
    REGION: "us-east-2",
    // URL: "https://xzc6ijyan7.execute-api.us-east-2.amazonaws.com/prod"
    URL: "https://8bm8v07z14.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    // USER_POOL_ID: "us-east-2_eQHab3Axm",
    // APP_CLIENT_ID: "417oo7gh1f7toibaea3ascj8tk",
    // IDENTITY_POOL_ID: "us-east-2:13304030-e7a0-4c16-9baa-74fcd606a1e5"
    USER_POOL_ID: "us-east-2_iOm6yVwDr",
    APP_CLIENT_ID: "70ev1f8f7hraeqnrvfnr1l8eoo",
    IDENTITY_POOL_ID: "us-east-2:95797b59-a612-45b9-9b61-7a401953e07d"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HZIj1I7YdI2ADniHmg0UzMBR9ChxSqkG6dl2dfAhS1NYpceU5nwaU5sbBDPGr4LVgtwtJKSkwWgal9CokR9B8JS00ALHGXFl3",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-vn"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://irtbql943i.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_4KfwpApNu",
    APP_CLIENT_ID: "4j0jb0o22ogul1j6mg8mik601m",
    IDENTITY_POOL_ID: "us-east-2:08f4abdd-409c-4990-806c-92401939b890"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};