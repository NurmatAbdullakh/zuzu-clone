import pizza from "../image/pizza.jpg";

export const ADD_NEW_ORDER = "ADD_NEW_ORDER";

const initialState = {
  data: [
    {
      category: "pizza",
      products: [
        {
          id: "43213",
          image: pizza,
          title: "Барбекюm",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "5234",
          image:
            "data:image/jpeg;base64,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",
          title: "Барбекюnop",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "67876",
          image: "",
          title: "Барбекюpo",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "54674",
          image: "",
          title: "Барбекюsz",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "sfda",
          image: "",
          title: "Барбекюmu",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "23fe1",
          image: "",
          title: "Барбекюny",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "f2r34f",
          image: "",
          title: "Барбекюt",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "g2fg4",
          image: "",
          title: "Барбекюse",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "u764",
          image: "",
          title: "Барбекюmv",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "hwer",
          image: "",
          title: "Барбекюnee",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
      ],
    },
    {
      category: "pasta",
      products: [
        {
          id: "sdafver",
          image: "",
          title: "Барбекюmw",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "4365354",
          image: "",
          title: "Барбекюnaa",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
      ],
    },
    {
      category: "salat",
      products: [
        {
          id: "9879",
          image: "",
          title: "Барбекюmk",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
        {
          id: "ujhegbdfsv",
          image: "",
          title: "Барбекюnn",
          description:
            "Томатный соус, говядина, маслины булочка гамбургер, соленые...",
          price: 74000,
        },
      ],
    },
  ],
  orders: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ORDER:
      return { ...state, orders: [action.newOrder, ...state.orders] };
    default:
      return state;
  }
};

export const addNewOrderAC = (newOrder) => ({ type: ADD_NEW_ORDER, newOrder });
