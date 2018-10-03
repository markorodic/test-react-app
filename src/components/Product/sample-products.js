export const initialState = {
  products : {
    byId : {
      1 : {
        id : 1,
        company : 'product one company',
        description : 'product one description',
        question : 'product one question',
        metrics : {
          revenue : 500,
          users : 1000,
          dailyActiveUsers : 50,
          weeklyGrowth : 5
        },
        questions : [1, 2, 3]
      },
      2 : {
        id : 2,
        company : 'product two company',
        description : 'product two description',
        question : 'product two question',
        metrics : {
          revenue : 500,
          users : 1000,
          dailyActiveUsers : 50,
          weeklyGrowth : 5
        },
        questions : [4]
      },
      3 : {
        id : 3,
        company : 'product three company',
        description : 'product two description',
        question : 'product two question',
        metrics : {
          revenue : 500,
          users : 1000,
          dailyActiveUsers : 50,
          weeklyGrowth : 5
        },
        questions : []
      },
      4 : {
        id : 4,
        company : 'product four company',
        description : 'product two description',
        question : 'product two question',
        metrics : {
          revenue : 500,
          users : 1000,
          dailyActiveUsers : 50,
          weeklyGrowth : 5
        },
        questions : []
      },
      5 : {
        id : 5,
        company : 'product five company',
        description : 'product two description',
        question : 'product two question',
        metrics : {
          revenue : 500,
          users : 1000,
          dailyActiveUsers : 50,
          weeklyGrowth : 5
        },
        questions : []
      },
    },
    allProducts : [
      1, 2, 3, 4, 5
    ],
    currentProductIndex: 0
  },
  questions : {
    byId : {
      1 : {
        id : 1,
        author : 'mike',
        question : 'question one',
        comments : [1, 3]
      },
      2 : {
        id : 2,
        author : 'mike',
        question : 'question two',
        comments : [2]
      },
      3 : {
        id : 3,
        author : 'mike',
        question : 'question three',
        comments : []
      },
      4 : {
        id : 4,
        author : 'mike',
        question : 'question four',
        comments : []
      }
    },
    allQuestions : [
      1, 2, 3, 4
    ],
    numberOfQuestions : 4
  },
  comments : {
    byId : {
      1 : {
        id : 1,
        author : 'dan',
        comment : 'this is a comment one',
        upVotes : 0,
        replies : [1]
      },
      2 : {
        id : 2,
        author : 'wes',
        comment : 'this is comment two',
        upVotes : 0,
        replies : []
      },
      3 : {
        id : 3,
        author : 'bos',
        comment : 'this is a comment three',
        upVotes : 0,
        replies : []
      }
    },
    allComments : [1, 2, 3],
    numberOfComments : 3
  },
  replies : {
    byId : {
      1 : {
        id : 1,
        author : 'alice',
        reply : 'this is a reply',
        upVotes : 0,
      }
    },
    allReplies : [1],
    numberOfReplies : 1
  },
  user : {
    name : '',
    questionsAnswered : 0,
    correctVotes : 0,
    questionsAsked : 0,
    commentsWritten: 0,
    score: 0,
    authenticated: false
  }
}