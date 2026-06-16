const awsconfig = {
  aws_project_region: "us-east-1",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_WruT6O3hU",
  aws_user_pools_web_client_id: "3035en2goiesj1a5seseris0fh",
  authenticationFlowType: "USER_SRP_AUTH",
  aws_cognito_identity_pool_id: "us-east-1:4d1c0841-6809-4835-9241-9ada3827be03",
  predictions: {
    convert: {
      translateText: {
        region: "us-east-1",
        proxy: false,
        defaults: {
          sourceLanguage: "es",
          targetLanguage: "en"
        }
      },
      speechGenerator: {
        region: "us-east-1",
        proxy: false,
        defaults: {
          VoiceId: "Ivy",
          LanguageCode: "en-US"
        }
      }
    },
    interpret: {
      interpretText: {
        region: "us-east-1",
        proxy: false,
        defaults: {
          type: "language"
        }
      }
    }
  }
};

export default awsconfig;
