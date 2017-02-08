let requireAuth = function(nextState, replace){
  alert('需要登录');
  replace('/login');
}
export default {
  path: '/',
  component: require('./components/Home/Home').default,
  childRoutes: [{
    path: 'SlideLoader',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/SlideLoader').default)
      }, "SlideLoader")
    }
  },{
    path: 'ScrollTop',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/ScrollTop').default)
      }, "ScrollTop")
    }
  },{
    path: 'ListView',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/ListView').default)
      }, "ListView")
    }
  },{
    path: 'ActionSheet',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/ActionSheet').default)
      }, "ActionSheet")
    }
  },{
    path: 'Modal',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/Modal').default)
      }, "Modal")
    }
  },{
    path: 'Toast',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/Toast').default)
      }, "Toast")
    }
  },{
    path: 'Carousel',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/Carousel').default)
      }, "Carousel")
    }
  },{
    path: 'IMGScrollRow',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/IMGScrollRow').default)
      }, "IMGScrollRow")
    }
  },{
    path: 'Goods',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/Goods').default)
      }, "Goods")
    }
  },{
    path: 'TabRow',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/TabRow').default)
      }, "TabRow")
    }
  },{
    path: 'TabBar',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/TabBar').default)
      }, "TabBar")
    },
    indexRoute: {
      component: require('../../components/RouteTest/Profile/Profile').default
    },
    childRoutes: [{
      path: 'c',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('../../components/RouteTest/Profile/Profile').default)
        }, 'TabBarC')
      }
    },{
      path: 'a',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('../../components/RouteTest/Profile/A/A').default)
        }, 'TabBarA')
      }
    },{
      path: 'b',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('../../components/RouteTest/Profile/B/B').default)
        }, 'TabBarB')
      }
    }]
  },{
    path: 'IMGPreview',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/IMGPreview').default)
      }, "IMGPreview")
    }
  },{
    path: 'IMGSwipe',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/IMGSwipe').default)
      }, "IMGSwipe")
    }
  },{
    path: 'login',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/RouteTest/Login/Login').default)
      }, "login")
    }
  },{
    path: 'messages',
    name: 'messages',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/RouteTest/Messages/Messages').default)
      }, 'messages')
    },
    onEnter(nextState, replace) {
      requireAuth(nextState, replace)
    }
  },{
    path: 'profile',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../../components/RouteTest/Profile/Profile').default)
      }, 'profile')
    },
    childRoutes: [{
      path: 'a',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('../../components/RouteTest/Profile/A/A').default)
        }, 'profileA')
      }
    },{
      path: 'b',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('../../components/RouteTest/Profile/B/B').default)
        }, 'profileB')
      }
    }]
  }]
}