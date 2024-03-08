/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","4397ac2fe74f6e65186ea9e768f7ff18"],["/2019/01/02/Anconda常用命令总结/index.html","8bd53e1679634ce59e9f1420734b4adb"],["/2019/01/02/句型/index.html","e2c168cd2c7f8f2e14460818ef5fee78"],["/2019/01/02/日语助词/index.html","8dfdc52aeedf5d90a8bf89813a6770a6"],["/2019/01/03/on-my-zsh/index.html","6db2025fc0e12d339df8c74a31570d1c"],["/2019/01/04/《当我遇见一个人》摘录/index.html","6e49d929d6c7e9f3037c23b4537a9953"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","355f245e82e11cd40a3c4c6e899b67ed"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","cbf64a15293e877c413e8cc46c64e097"],["/2019/01/04/经济学笔记/index.html","c60c9a55970878b792faf90466af7b59"],["/2019/01/04/语法总结（5-15）/index.html","b6b31e4c66df0f034e59d2cc5eff1521"],["/2019/01/05/linux常用命令/index.html","02c0053b957b508aa345daca98ef604d"],["/2019/01/06/敬语/index.html","9df0a4a95a4ed05bc0a50b9507c56a28"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","fdfa8692dc003ccf7e53b63124e396c6"],["/2019/01/07/cuda 手动配置/index.html","5393e6b768db47fd0aaffb8b67744b44"],["/2019/01/07/docker-ldap-mysql/index.html","a54537d2c071df9c141b457338f15db2"],["/2019/01/07/docker安装/index.html","8f0d3f238f0c6b146b9b6ce910ae2864"],["/2019/01/07/docker容器挂载硬盘/index.html","8370182374b4863f1f155af3976e9101"],["/2019/01/07/github上传代码/index.html","5aac71b7b9427d4af2b5def28197b4a8"],["/2019/01/07/kaldi 安装/index.html","81958a81b758f62822e0d23807535b3b"],["/2019/01/07/linux常用工具/index.html","0625e7b03e0125e770966d638a41cce8"],["/2019/01/07/opencv/index.html","69b6832b5f64258eb804469c26c7e2cc"],["/2019/01/07/ssh 远程连接docker/index.html","325e14c82016485cb72b9f249fc4d667"],["/2019/01/07/导出/index.html","1f94cc8467b985498546a0a8ef142cf0"],["/2019/01/07/换源/index.html","50afc2615bf1769211eef126ba5505c3"],["/2019/01/09/markdown/index.html","ebc836dc361861b459a42fa447645f6d"],["/2019/01/09/opencv图像美化/index.html","709e3082f3da06bf45941ed11449b336"],["/2019/01/11/19单元语法/index.html","44ce988675576b2e5053f6782ed0d50a"],["/2019/01/11/20单元语法/index.html","53d52dd664842f4210ccca807faf2698"],["/2019/01/11/opencv-图片几何变换/index.html","d9ff9fb42cd8a1a079c5ff3fd059bd3c"],["/2019/01/11/opencv-图片处理及绘图/index.html","def4825db53edbc8669993aa2f890c35"],["/2019/01/11/wine安装qq/index.html","5e1f960210493a9d00be38b4155b8343"],["/2019/01/12/tensorflow-可视化/index.html","7a75229fe0f01f1bd293662fbca35141"],["/2019/01/12/tensorflow-基础语法/index.html","34637bd55967ff5c3c27c1447b9391fd"],["/2019/01/13/RNN/index.html","443ff69005d4f13d63204909f287ba9b"],["/2019/01/13/keras实现CNN/index.html","08c89e469b785a15cb4111d95b56dd3d"],["/2019/01/13/卷积神经网络实现/index.html","ac24ba709c9b44209cf1b912498eac61"],["/2019/01/13/循环神经网络RNN-写诗/index.html","e33008353e204a44db5c48a8d2f1fd1d"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","2be50266f529f0ce91177eaa473afcd6"],["/2019/01/14/反向传播/index.html","3373b399aaebade4867d6d2a8a397521"],["/2019/01/14/图床/index.html","59ece0be503bebf3d190498ef79a14db"],["/2019/01/14/感知器与激活函数/index.html","8aa67a08e04f793673066d78a8d2f1c1"],["/2019/01/15/PIL简单应用/index.html","55a928698f14b6d0505024640c1ffb6a"],["/2019/01/15/卷积神经网络理论/index.html","fc94840b42b5de9c15a1d7b685cf4995"],["/2019/01/15/图片分类之pca-svc/index.html","277957944ec32de1b27dddea8d7220ef"],["/2019/01/15/强化学习基础/index.html","fc175a252e5a05a59eaf737d30c29cf5"],["/2019/01/15/经典神经网络/index.html","9933fa7be5edb64a260873cddab25008"],["/2019/01/16/DQN/index.html","266031d62f16b50b8501192267bd2ac3"],["/2019/01/16/TCP传输图片/index.html","6eeabc38c2f57bb877bb4811403bcd35"],["/2019/01/16/时序差分学习/index.html","2f1529c1ccd77d3a4c113c76f154f5e2"],["/2019/01/16/蒙特卡洛方法/index.html","a6ce1be70993d6e00578b739cd8a554f"],["/2019/01/17/Double-QDN/index.html","742f59e37037021b1e60e87a179e82ef"],["/2019/01/17/RNN理论/index.html","0c80a7cf6d662fdec8b4dae7e365b626"],["/2019/01/17/梯度下降/index.html","2746823075b1be95a98f386d2603ae14"],["/2019/01/18/PG和TD3/index.html","3c4c138ea46feab34cafabb4f2004744"],["/2019/01/20/21单元语法/index.html","5fbcca7e2fb09fcc7133358991298c92"],["/2019/01/20/GAN理论/index.html","eb2c3427cca9c8f1d4d344c19de3463e"],["/2019/01/20/PG3和IRL/index.html","c47c72929f8988aa2179f942ba433de3"],["/2019/01/20/数据集/index.html","d620e6082e3e55f136918537db86a83a"],["/2019/01/21/DCGAN/index.html","73c231dd05052240e94082c57cf839b4"],["/2019/01/21/LSTM/index.html","ccca419f73b20fc3a32480450248bf08"],["/2019/01/21/点击预估/index.html","e4f58c0080406e1e29e72b743c806d70"],["/2019/01/22/SVD分解/index.html","1c75b9fdc10dee998b17ccf665c29569"],["/2019/01/22/SVM/index.html","9b6d15ac0e334541058314c020ca7ae2"],["/2019/01/22/机器学习简介/index.html","41082d1987c64eca656252409b5b94b6"],["/2019/01/22/线性回归/index.html","07a603f325c23bfb5cd751cbf6462cad"],["/2019/01/22/逻辑回归/index.html","5da6294d11fc269eb0acc790d465ac66"],["/2019/01/23/numpy/index.html","6ea4aef4d05f6871649367d95a0e0ae2"],["/2019/01/23/决策树与随机森林/index.html","0618519d0cafa04eb41fa0f6ec3c1cf4"],["/2019/01/23/聚类/index.html","a0d812c58ca1587a85d7b87bd13ca1d1"],["/2019/01/24/matplotlib/index.html","904cf8d76414145ba6dae44833ea107e"],["/2019/01/25/pandas/index.html","fd3308204383efe31dae6dcff4b1c709"],["/2019/01/25/语义分割/index.html","7d80d3fbecdb8cec0e2dfe5ad5d04b56"],["/2019/01/27/22单元语法/index.html","04327e569c66b2dea1765e67424369c3"],["/2019/01/27/SVM案例/index.html","40e2a8d146b416f3cee63338c94243da"],["/2019/01/28/requests库及爬虫案例/index.html","9bd8f598699c55f9a499718d37254135"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","26149318c5365460a8ca59576b1a925d"],["/2019/01/28/异常/index.html","c4d3d1d60204aab4ee9998db58c544e0"],["/2019/01/28/描述器和装饰器/index.html","a72bb78d0a9472c215e9f0f76dc60efb"],["/2019/01/28/文件/index.html","8dcf1d28273162728f96e691f36b746a"],["/2019/01/28/正则/index.html","f1f636fbafaf60e46953b0142ca2f17a"],["/2019/01/29/函数基础和函数参数/index.html","b849396e3bf03f15742a5433f811ea99"],["/2019/01/29/多继承和魔方方法/index.html","9a5f4077dfc540dbe9c0e74e7f887e76"],["/2019/01/29/类定义、属性和继承/index.html","2f2f6e9f30937007e45244cfdee45318"],["/2019/02/27/23单元/index.html","0e1d9abd882a086ba1b7f7da75b2da06"],["/2019/03/12/hexo系统重装恢复/index.html","c21958de300f8a1a8e0b20bd32fe3474"],["/2019/03/13/24单元/index.html","0b2677e0bb98c3233d6b0e96f2a28e13"],["/2019/03/19/25单元/index.html","ad27591cba52398b78c378ee10269b45"],["/2019/03/26/26单元/index.html","a01eb1dcb2e8ae321f2987a3a955782a"],["/2019/04/14/27单元/index.html","99886f67c81b18a65f553da70a8a120c"],["/2019/05/01/28单元/index.html","061220f508701f0cc500b788d98c9375"],["/2019/05/02/29单元/index.html","0b56a8fb8e4a9f6e02be48f0ed99d005"],["/2019/05/12/30单元/index.html","d28122f1420e69fe14f9c7c0130ae641"],["/2019/06/03/jni/index.html","c5bacfd92e0787834d6eecfd69272816"],["/2019/06/07/JNA/index.html","92f5876104c9100c631dd1be7674393c"],["/2022/08/07/R配置jupyter/index.html","b5bd4b233f53d9609d4219230947a789"],["/2022/08/18/FFmpeg常用命令/index.html","6ff085755fec7e49b9f1eac464ddc5e2"],["/2022/08/18/linux系统代理/index.html","c2cb82de400e62b1e781fb158da88321"],["/2022/08/18/matplotlib补充/index.html","2be506b84a76f0efdc3ee18759630c25"],["/2022/08/18/常用命令/index.html","89b4235229ea1ac6c97b508770e3f760"],["/2022/08/20/sacred/index.html","c17735af80d0eea59063add13d45c399"],["/2022/08/20/wsl/index.html","6dafaf5abeb603339902382107ac614a"],["/2022/08/20/双系统安装/index.html","57d8f88cb0c3fb199b70ee65f17b71a5"],["/2023/06/28/source/index.html","781cbbb86aec8d5d7c6a4fcbae72826f"],["/archives/2018/12/index.html","e89794f84c93a1bac71f3f7d64eda5a3"],["/archives/2018/index.html","ca532616336ea0cb6465abdacc3aba15"],["/archives/2019/01/index.html","e03d00e5eebe6257cb645609dd48f745"],["/archives/2019/01/page/2/index.html","c66be1f985655236d9f3a95e2d709cf7"],["/archives/2019/01/page/3/index.html","e0ea2bb5f8ac591b39636e7eb87faf5b"],["/archives/2019/01/page/4/index.html","82ccb2470c203e47460eb8f79a03a391"],["/archives/2019/01/page/5/index.html","36ecd65d93c3bbdad57faf7576cf35c9"],["/archives/2019/01/page/6/index.html","e3673ef071727565b8515ceba52dc8ce"],["/archives/2019/01/page/7/index.html","cf3e8ab0edc82653bb89c11ae5f07803"],["/archives/2019/01/page/8/index.html","c75a9d07fa88350c07720f7fb3d99e7b"],["/archives/2019/01/page/9/index.html","478b8b658a607d587ed5c3593820770d"],["/archives/2019/02/index.html","a175d7dc94419cfa4d354ef80275ae2d"],["/archives/2019/03/index.html","438705c16467b4a3c09791fd5070bd62"],["/archives/2019/04/index.html","9479f84cc1f91a6ddb7a287023474664"],["/archives/2019/05/index.html","168e5270ac0e1e91092c95f360a8fd6c"],["/archives/2019/06/index.html","8c9517061a8390752a5c44ade9c23e46"],["/archives/2019/index.html","006f95498a740424174277776ec3a17f"],["/archives/2019/page/10/index.html","b6a7459d4bd55304c801677e3f13bd3b"],["/archives/2019/page/2/index.html","ba3a3639fdf49d49695a69761e134d00"],["/archives/2019/page/3/index.html","595c34eca017b22471395a0c7362d285"],["/archives/2019/page/4/index.html","0b18c3be27d3d7568f3b2251c19c354f"],["/archives/2019/page/5/index.html","4f5111e08df6c65a98695f20b897df07"],["/archives/2019/page/6/index.html","02afcb9fd9ffcac1a31361b39a6ca89a"],["/archives/2019/page/7/index.html","8e98a9c526064c60ac6a3172a951eaf0"],["/archives/2019/page/8/index.html","a7fe31938817604ac20f71f8766989e6"],["/archives/2019/page/9/index.html","8ea770f71b43f6287047e4885b2fbc17"],["/archives/2022/08/index.html","2585557fc6bedce13807f447efed8eb8"],["/archives/2022/index.html","f937e6d24d5f2913bdc2f676b94a45cb"],["/archives/2023/06/index.html","5c1fd1cfe6ce488b70cb8aac0ede3cd1"],["/archives/2023/index.html","251af6a5bbf939c77050a52ccfb14598"],["/archives/index.html","a84eef20627d0f23b1a0d3036eae058c"],["/archives/page/10/index.html","abd7e65c844f3ed915fed0f071de8042"],["/archives/page/11/index.html","f25e8217e066d1ac04cc30cf67a92f41"],["/archives/page/2/index.html","87ec68b1255f15af4588ebdd930b2a91"],["/archives/page/3/index.html","88a52aa3e939bd27e768da3b0a4fe133"],["/archives/page/4/index.html","af994372859cb6eb5066ecebbb4ca6dd"],["/archives/page/5/index.html","f5ac41bac2afd9d70eaa940ce077430a"],["/archives/page/6/index.html","64813acf47f5d52c2a3c76cc99a7b8b0"],["/archives/page/7/index.html","5ed2cbf0951c2128d2c3a778b8187817"],["/archives/page/8/index.html","5ece006f04bf28c251a2bd4fbfe2eb28"],["/archives/page/9/index.html","9272292f37a66363598d09c5a9ef177c"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","d55d4774fc4222d82fcc8d89d61d2c1b"],["/categories/dxz/index.html","ef1236a05035e645ab3398869b1c0f05"],["/categories/index.html","c46b124b86c47fba6167a8d0a3f34d55"],["/categories/java调用C/index.html","5c21976e87a853d4b5412051884409ac"],["/categories/linux/index.html","8ad80e2859182c8e658a74d4b32859c9"],["/categories/linux/page/2/index.html","e9a6be27b83c5852839c7adbdbf13a11"],["/categories/python/index.html","c1711c1e9fb63ba79c60292b332f606b"],["/categories/tensorflow/index.html","1ab5a691a5911399319be07ba5b2d6b4"],["/categories/优化算法/index.html","1c6c01e6403926c4564782891b123693"],["/categories/图片分类/index.html","c178dc70467359c3712f7acbf96c6da6"],["/categories/工具/index.html","4cc2b04e40265b806838148caec969e0"],["/categories/工具/page/2/index.html","9ab4c0146f3cd9d1fb47a44ef0898aa0"],["/categories/强化学习/index.html","3dfaf41dd4886d592b31279dfa9e5c88"],["/categories/数据集/index.html","41e4e1f62e2751b2f4c0dd5045022cd8"],["/categories/日语/index.html","84893e093bf20e49583c474aa4921611"],["/categories/日语/page/2/index.html","21a87ef73be4f60eb02cceb691f57351"],["/categories/机器学习/index.html","fb414d08a67dadaadcf491fc7cf72cba"],["/categories/深度学习/index.html","290f3cdd52cec530dd3903ee9876283d"],["/categories/深度学习/page/2/index.html","49373f513276f8bd905e51e5bb2a3a39"],["/categories/计算机视觉/index.html","bcd5103927570d1e556e4b9a4354e4cd"],["/categories/读书笔记/index.html","efd34c03f5f9a8356744b62f92e7d96a"],["/css/main.css","4b4a75a6b488817b334e5b305aabcc93"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e7fcf291b45922ddd93cfafa03bc9143"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","ca4f0e1b8f8d094360cd76b32ed4e2dd"],["/page/11/index.html","234d5266b383876229064dd4cac31a60"],["/page/2/index.html","c74158949b5af2c035132b3a0083aa41"],["/page/3/index.html","c06ee7e590f3862d1d36d8dc668b926d"],["/page/4/index.html","e94676dec7b24001139f4eeea7c46b12"],["/page/5/index.html","0f44ae518a74cd7e95e31f3e8fe9c024"],["/page/6/index.html","3ba9f4ca5b8e5c01ea3a2f195dcd2f39"],["/page/7/index.html","6eff4d921c4688e7ea3ff93fb6019615"],["/page/8/index.html","2e568314f4e3e0265f7a09322820a65f"],["/page/9/index.html","2f74c011cb5ec57a73c64dda2c2469f8"],["/sw-register.js","bcf84958790109befc3e867a3142a33f"],["/tags/AlexNet/index.html","120bb5a084e032675a0c9b42d5c4f3f1"],["/tags/CNN/index.html","aae88c447a1830d1a66ca07b1c2982d1"],["/tags/DCGAN/index.html","87f002d858154f6a8266156a6232f3f1"],["/tags/DDPG/index.html","27d18f1ae3e17b1b5f895d9a6be54ced"],["/tags/DDQN/index.html","5efcf532b5e65749e9815cb6210f3a95"],["/tags/DQN/index.html","37c036288585dd17452d9dec666fd31f"],["/tags/GAN/index.html","ef51f8c906554f521379925ad0ed8b28"],["/tags/IRL/index.html","4a3778291eccef20ce52a8346c2f88c8"],["/tags/LSTM/index.html","8876cfaf7fa64778bc3f36b9a4f3ec39"],["/tags/LeNet/index.html","cb10413ce990b523e2a6b28e70f6dc2b"],["/tags/MC/index.html","970929318344e504b7953fe9cf89033a"],["/tags/PCA/index.html","e4c117c2510231e3d3fe5b2926261760"],["/tags/PG/index.html","75e618692ab9411001c6950778bf78fc"],["/tags/PG3/index.html","9e1d5228a992fe0bb75f988cd55d51f7"],["/tags/PIL/index.html","20c6051670ed447734a43373edb0134d"],["/tags/R/index.html","2f8609cdab7db2f06288425583350f77"],["/tags/RNN/index.html","1c5c8ff96933c897f360c752f9e34cad"],["/tags/SVC/index.html","0933c83d6d380458631f87858c44e4ef"],["/tags/SVD/index.html","8d4b681a62e68e4e027f2942ea054c6c"],["/tags/SVM/index.html","646575666922d2318ebb7f460c7b5c25"],["/tags/TCP/index.html","32e26093444a83db053615658304d381"],["/tags/TD/index.html","01e1bb192aaf82eef206792492e6fbbc"],["/tags/TD3/index.html","fe8f5dba927a54b41e70f80ecfd1442e"],["/tags/VGG/index.html","f22afb619458aaef782ac248e7b2ac98"],["/tags/amd配置/index.html","20c32649e8c4f4d5ff3511c76a4ab1a5"],["/tags/anconda/index.html","7ede08a88f5e4a39467bc0720cc00b0a"],["/tags/conda常用命令/index.html","9d41661d2a09726788deaf38732b2218"],["/tags/cuda配置/index.html","c1a1ab600826abfc94486d3ab44892e0"],["/tags/ffmpeg/index.html","dfb87ff5c01fcfc9009e0f7341afb227"],["/tags/github上传代码/index.html","e3982725fef6006d406d396a0cc57f6f"],["/tags/hexo/index.html","9f835b0108a51f439468d17fda51e5a7"],["/tags/index.html","063501a417af356cbb80e42db680aa8d"],["/tags/java调用C/index.html","e637bd64bb4c6466c62799ed1cdd48dc"],["/tags/kaldi/index.html","3fdff3b8cbca862784a601b77e74f645"],["/tags/linux命令/index.html","332de6a6cd68d36271be4ae86dbb0464"],["/tags/markdown/index.html","4fbed8f459f8df5bacdf1b7a1f162f35"],["/tags/matplotlib/index.html","6701dd20cf03f69bdb5ac4114618cf16"],["/tags/numpy/index.html","d4be3dadaaa9f00135f171dc47e80feb"],["/tags/opencv/index.html","e65936a690aa80e45224cd733ecd203e"],["/tags/pandas/index.html","5387374868eed0584f36f53bd7af8fc8"],["/tags/qq/index.html","12a2d6b0fbf1efdc5d809b07c9089c72"],["/tags/requests库/index.html","47dd13d83eb90a4a01ecebeb265860d2"],["/tags/sacred/index.html","ec7e75a90956cff79ed6a75613c117cb"],["/tags/ssh-远程连接docker/index.html","dd6bc22fe156c131d8b687f401fcf908"],["/tags/wsl/index.html","bcb7411e05bd5dd9a403811be17e1fa7"],["/tags/zsh/index.html","a946e7e4f83173ecb5e0d051221733a2"],["/tags/代理/index.html","86f965185f9d8998a3f6b2c288a6b2e3"],["/tags/决策树/index.html","433f8c8a5537676378eb4f818186d04d"],["/tags/函数/index.html","33f6094aaf5275a2c99df736a98fc3e0"],["/tags/列表推导式/index.html","75f4be3edc5b435095bdbf4ea42851f1"],["/tags/助词/index.html","c60dadd2701d2deec312b3295483c257"],["/tags/包/index.html","358b16209f81c1d5511a7e93bab642fd"],["/tags/卷积神经网络/index.html","753a418c3bfbf683f44fbccbbfd8d901"],["/tags/双系统安装/index.html","e4862d976e51e8501e3c9b9f45bb7126"],["/tags/反向传播/index.html","ae13f87e0c8777062abb3b962b1b9982"],["/tags/句型/index.html","fd78fcefcd4b44bfc5d08e2c4c100a88"],["/tags/可视化/index.html","58244a3d61d891b9abbee70d368d1c27"],["/tags/哲学/index.html","f21da845c94c63a8e82a905e381605c9"],["/tags/图像美化/index.html","485e13186e8355f1d9d4224fd18e0982"],["/tags/图床/index.html","1cc5bd7f87f03b105ec16beb0345c35f"],["/tags/多继承/index.html","869081b4cb972995988ddf36f01c5038"],["/tags/工具/index.html","f07e3b440ab98d6fefe41fd3a976f5a0"],["/tags/异常/index.html","87d8e3dfc175996e2c86e83eb9368561"],["/tags/强化学习/index.html","214d94f26d7c746cdcfee2ee17ddece9"],["/tags/心理学/index.html","a7dc9cbdafa2107e577aadfc8930a98f"],["/tags/感知器/index.html","2cac7c66283979872152e9fecb64a2f4"],["/tags/换源/index.html","ac026da26b1016179ae0370dd56182d8"],["/tags/描述器/index.html","d075e76ebed31f864a9f076c5185efab"],["/tags/敬语/index.html","e629b5179067730fd96bc16bb098f784"],["/tags/数据集/index.html","3343ee27266da2eced3c421bf34502a6"],["/tags/文件/index.html","89ceffff2990c65b24c8ecaffaffd3bc"],["/tags/机器学习/index.html","04d8264febeb24102255778b834031ea"],["/tags/梯度下降/index.html","693b46957b8b9b6a88a2144614e7cbf6"],["/tags/模块/index.html","02956e8078456cd496a8d7134dfb055d"],["/tags/正则/index.html","ba7dc7f0779064d21e77cbd2d32a6643"],["/tags/激活函数/index.html","353b59a599a80dac410a33f4de1d141b"],["/tags/点击预估/index.html","13901c4b4c4451d526af9142fbdc6861"],["/tags/爬虫/index.html","3684af397a6b31bf0ed25d909fd80df2"],["/tags/生成器/index.html","12cd7547d1a1998ad63417a1f6ee971c"],["/tags/类/index.html","1ad16cadfdbb2ee55981810f4270cbb0"],["/tags/线性回归/index.html","d95c541f53ed73bfa42beaf5b4b380dd"],["/tags/经济学/index.html","b0e3b952b14537a86f94abbdcf513a2d"],["/tags/聚类/index.html","ae3647e36c08a43b086ef884ce662edb"],["/tags/装饰器/index.html","abbb251ab3007b3ff41a6d5db0fef23f"],["/tags/词型变换/index.html","4e1aed706bdcb9242e1617f516176a97"],["/tags/语义分割/index.html","ab4ae041449e193fb4570bb7545adadd"],["/tags/语法/index.html","3af144cdf17b5c41854c00ed0014d2ca"],["/tags/语法/page/2/index.html","09d051e7c51a5d817c55feab3b19cbe4"],["/tags/迭代器/index.html","a533d9f88743a154825e0b38831a6a42"],["/tags/逻辑回归/index.html","6fe6a21d482d148404f348605b850c96"],["/tags/随机森林/index.html","9d66e02bd9550a4564335403928d2769"],["/tags/魔方方法/index.html","ad3c914f59644ede0ca154d72a3fb653"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
