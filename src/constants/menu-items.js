const menuItems = {
    Log: {
        protected: true,
        collapse: {}
    },
    User: {
        protected: true,
        link: '#',
        collapse: {
            Home: {
                type: { internal: true, protected: true },
                link: '/userhome'
            },
            Account: {
                type: { internal: true, protected: true },
                link: '/account'
            }
        }
    },
    Game: {
        protected: true,
        collapse: {
            Active: {
                type: { internal: true, protected: true },
                link: '/activegames'
            },
            Ongoing: {
                type: { internal: true, protected: true },
                link: '/ongoinggames'
            },
            Create: {
                type: { internal: true, protected: true },
                link: '/newgame'
            },
            Custom: {
                type: { internal: true, protected: true },
                link: '/customtemplate'
            }
        }
    },
    Character: {
        protected: true,
        collapse: {
            Existing: {
                type: { internal: true, protected: true },
                link: '/characters'
            },
            New: {
                type: { internal: true, protected: true },
                link: '/newcharacter'
            }
        }
    },
    About: {
        protected: false,
        collapse: {}
    },
    Connect: {
        protected: false,
        collapse: {
            Facebook: {
                type: { internal: false, protected: false },
                link: '#'
            },
            Twitter: {
                type: { internal: false, protected: false },
                link: '#'
            },
            Discord: {
                type: { internal: false, protected: false },
                link: '#'
            },
            Forum: {
                type: { internal: true, protected: false },
                link: '#'
            }
        }
    },
}

export default menuItems