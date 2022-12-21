const menus = [
  {
    title: "Home",
    className: "home",
    href: "/",
    hasChildren: false,
  },
  {
    title: "About",
    className: "about",
    href: "/about",
    hasChildren: false,
  },
  {
    title: "Cards",
    className: "cards has-down megamenu-item",
    hasChildren: true,
    child: [
      {
        title: "Credit Cards",
      },
      {
        title: "EMI Cards",
      },
    ],
    // type: "mega",
    // child: [
    //   [
    //     {
    //       title: "HDFC BANK",
    //     },
    //     {
    //       title: "AU BANK",
    //     },
    //   ],
    //   [
    //     {
    //       title: "IDFC BANK",
    //     },
    //     {
    //       title: "INDUSIND BANK",
    //     },
    //   ],
    //   [
    //     {
    //       title: "CITI BANK",
    //     },
    //     {
    //       title: "YES BANK",
    //     },
    //   ],
    //   [
    //     {
    //       title: "SBI BANK",
    //     },
    //     {
    //       title: "RBL BANK",
    //     },
    //   ],
    // ],
  },
  {
    title: "Loans",
    className: "loans has-down",
    hasChildren: true,
    child: [
      {
        title: "Home Loan",
      },
      {
        title: "Personal Loan",
      },
      {
        title: "Car Loan",
      },
      {
        title: "Business Loan",
      },
      {
        title: "Loan against property",
      },
      {
        title: "Bank transfer",
      },
    ],
  },
  {
    title: "Insurance",
    className: "insurance has-down",
    hasChildren: true,
    child: [
      {
        title: "Life insurance",
      },
      {
        title: "Health insurance",
      },
      {
        title: "General insurance",
      },
      {
        title: "Term plan",
      },
    ],
  },
  {
    title: "Privacy",
    className: "privacy",
    href: "/privacy",
    hasChildren: false,
  },
  {
    title: "Contact",
    className: "contact-us",
    href: "/contact",
    hasChildren: false,
  },
];
export default menus;
