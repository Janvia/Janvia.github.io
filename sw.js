/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","9d2543db43b171bdf1baeab7ae4dac0f"],["/2019/01/02/Anconda常用命令总结/index.html","126ec60f23db148c60d40350dc232760"],["/2019/01/02/句型/index.html","7d3c64230b7910280a7a089e10060b5c"],["/2019/01/02/日语助词/index.html","a9967591cec6a58d4279701373c90446"],["/2019/01/03/on-my-zsh/index.html","d20b671abed967105ffa4e5567f7fef5"],["/2019/01/04/《当我遇见一个人》摘录/index.html","84ed665d3ce9360e3c989b6ef314da29"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","4b8d156bb1c41ae5a0a40f82e418048e"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","401bb2e73a278edb245315a38ea7fb91"],["/2019/01/04/经济学笔记/index.html","7bc43dc76b33d363788824df400e2c34"],["/2019/01/04/语法总结（5-15）/index.html","3da53292fe79e8bfa169af2fb8d04163"],["/2019/01/05/linux常用命令/index.html","750625167962bef009d6d1a6615760e3"],["/2019/01/06/敬语/index.html","09016be9186350a2adb13395c582518c"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","bb6f8d9567e2c3770db985496a27615b"],["/2019/01/07/cuda 手动配置/index.html","ce7fe1bae15c54e86ea44d1c13cf82f3"],["/2019/01/07/docker-ldap-mysql/index.html","25d6059ee2502748af145215a64db3d7"],["/2019/01/07/docker代理/index.html","79fec0289e95b55b489eda7b430294ee"],["/2019/01/07/docker安装/index.html","d5a831ce37f0eb20bdd283baa3e32733"],["/2019/01/07/docker容器挂载硬盘/index.html","3054a9fbe69aa8754c1962e44fc7a71b"],["/2019/01/07/github上传代码/index.html","70487651e07fd6cdd4a95298f5a65728"],["/2019/01/07/kaldi 安装/index.html","74d482b836f8d3259ec796f2cc10d1eb"],["/2019/01/07/linux常用工具/index.html","fac89dbe35b5394abeecc03b3610dc66"],["/2019/01/07/opencv/index.html","9fa273815b2419f3253ae94c086dec66"],["/2019/01/07/ssh 远程连接docker/index.html","ae6f3e77bffc2bb52ef9180a7fb332e8"],["/2019/01/07/导出/index.html","be009c86ec1f7b83faac4f481f5fbe38"],["/2019/01/07/换源/index.html","f10646acfcacdda9b4865cbcfad84577"],["/2019/01/07/服务器配置LDAP/index.html","b8c43afd133610e1021ef63a156f2a2e"],["/2019/01/09/markdown/index.html","beee142126175de2d2f2b72c1b671f23"],["/2019/01/09/opencv图像美化/index.html","7afba8718630992060e67db20167eb7e"],["/2019/01/11/19单元语法/index.html","2e4db9c12e1764f0a40d98dd7d7b008f"],["/2019/01/11/20单元语法/index.html","cd32a671999246453b6455f566e4781a"],["/2019/01/11/opencv-图片几何变换/index.html","2a08c92728165651ccfcf0f1a9ef7415"],["/2019/01/11/opencv-图片处理及绘图/index.html","a2c58c0ac865e35b35b3d40e77b190fb"],["/2019/01/11/wine安装qq/index.html","184531f554e4ad2ded392213ff4c8876"],["/2019/01/12/tensorflow-可视化/index.html","809c11826fbe1fd67f14ecf86b4e9b17"],["/2019/01/12/tensorflow-基础语法/index.html","afb7a5faab10cd5e55d3c39aabaabd61"],["/2019/01/13/RNN/index.html","9d50b1250143d331a7ecb52736c9c9ea"],["/2019/01/13/keras实现CNN/index.html","320dfe5f6237786be8703bc8aa5c9ab8"],["/2019/01/13/卷积神经网络实现/index.html","b2786d1660e2d8e22be02bb54298672f"],["/2019/01/13/循环神经网络RNN-写诗/index.html","e6d236a22ad1d3db6a788967d8f429ff"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","9570844c6613c07a2c69c90d54760335"],["/2019/01/14/反向传播/index.html","6cadf3908dd4a7d2009e39f14cb62829"],["/2019/01/14/图床/index.html","ed148e2680bf2c0a39bee81b704b5746"],["/2019/01/14/感知器与激活函数/index.html","15075ff73df8c40be3bb3472e1e596f4"],["/2019/01/15/PIL简单应用/index.html","4293195eba15ebc6b92af4c63848edb7"],["/2019/01/15/卷积神经网络理论/index.html","855da79648fca1ca083a4c6da751dd2f"],["/2019/01/15/图片分类之pca-svc/index.html","9d5c867ddd0732537532997163e42058"],["/2019/01/15/强化学习基础/index.html","98df420264c84834abe0e8b9a6349dc0"],["/2019/01/15/经典神经网络/index.html","d9f52275c117b9395cdd09d7455b8c5d"],["/2019/01/16/DQN/index.html","3b34492b267f5b3a9a9e504f4b887b2f"],["/2019/01/16/TCP传输图片/index.html","c60b6828e118451ec4246adb38d8c064"],["/2019/01/16/时序差分学习/index.html","c7e65c4512edd84785386a917900ce9d"],["/2019/01/16/蒙特卡洛方法/index.html","966fe746cc1959fbc6d94ac6db5f5c99"],["/2019/01/17/Double-QDN/index.html","85953e2fbff7570accc81ab6e4df1d8d"],["/2019/01/17/RNN理论/index.html","090559e34201fece71a1f8939a22ec6e"],["/2019/01/17/梯度下降/index.html","0a93c482196ad8c0675db6ef37c929e4"],["/2019/01/18/PG和TD3/index.html","0b4991a9cd33a29d6ad923e827859f09"],["/2019/01/20/21单元语法/index.html","1eaf400999c6b76c95fc56ce81bb49b2"],["/2019/01/20/GAN理论/index.html","f0f665882bd4a64a1503c748470ecc57"],["/2019/01/20/PG3和IRL/index.html","c0e0a2cba1f411c5dbd8aec2f0c6d732"],["/2019/01/20/数据集/index.html","4ce9143f811ebf10f56326aa14c94d72"],["/2019/01/21/DCGAN/index.html","ca680c853e006ca33889e6f6de1a02e9"],["/2019/01/21/LSTM/index.html","e70aab48c95fc90f12df1b0a5d68e0ab"],["/2019/01/21/点击预估/index.html","958e7801abf7b9a92186b765f8a05ee9"],["/2019/01/22/SVD分解/index.html","4a844406948210653d547cd9971d58d7"],["/2019/01/22/SVM/index.html","6a0b17545c5accf9458c7b9e96dd2ee7"],["/2019/01/22/机器学习简介/index.html","1ebf417690e51ddb6f523bc33168270b"],["/2019/01/22/线性回归/index.html","9748fe7023b65c717de0542308c94241"],["/2019/01/22/逻辑回归/index.html","6127637de7402f58ab32dcdf2802edda"],["/2019/01/23/numpy/index.html","6a6c16eb9bccea03745bd7ecbb01c3ef"],["/2019/01/23/决策树与随机森林/index.html","7f7c1b33d67cb6829427441bc3397c0f"],["/2019/01/23/聚类/index.html","c82ceeae3b4c98fca3dbe1d21d2f1a2c"],["/2019/01/24/matplotlib/index.html","318da325a42af6817e3588bdbc0f44f4"],["/2019/01/25/pandas/index.html","938fbc0065bc452fcef0792c6bfe01e6"],["/2019/01/25/语义分割/index.html","e5f1c5743eb9b772b743ff333dadafd4"],["/2019/01/27/22单元语法/index.html","7bdddce9348bf35cfa523e76e6baa5d5"],["/2019/01/27/SVM案例/index.html","d336171760fa28af228f9bd6710d401c"],["/2019/01/28/requests库及爬虫案例/index.html","4486cbbed7dddfafcc7959635ae8d757"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","7827c629d0ecb4450f136934a7b829d4"],["/2019/01/28/异常/index.html","fa0b38ba34c45e6082496eca5d5471af"],["/2019/01/28/描述器和装饰器/index.html","511526b6fbc783509929d9dab854f88b"],["/2019/01/28/文件/index.html","72fb2ce46cfe238574b9346596bdf1dc"],["/2019/01/28/正则/index.html","c6fcda6c002b0e05581dea9561c24d20"],["/2019/01/29/函数基础和函数参数/index.html","91b6eb0221e32bcc5408f58194ca9041"],["/2019/01/29/多继承和魔方方法/index.html","ddc4bd30044dd69f826638d77f7e1936"],["/2019/01/29/类定义、属性和继承/index.html","4cef0bf513c9376c2ebfe40f0e7961c7"],["/2019/02/27/23单元/index.html","a87f48eead13df21ab2a106b6947a36e"],["/2019/03/12/hexo加速/index.html","6accb4bd6173081bdda2caa2fc5e0a5c"],["/2019/03/12/hexo系统重装恢复/index.html","53a029ec32dad36b28e0d3ada29481f5"],["/2019/03/13/24单元/index.html","2d0ed5312b72fd87ca19093748aceb64"],["/2019/03/19/25单元/index.html","a97fbf976cb31a49270ae782cd745b63"],["/2019/03/26/26单元/index.html","5b5b55e19c500f702beb8189e1b548e3"],["/2019/04/14/27单元/index.html","ec52f1c0c63462f3fe08ffd01f699390"],["/2019/05/01/28单元/index.html","0e21e098be905a36845631059d9a1d44"],["/2019/05/02/29单元/index.html","8883279f0e90e87dbcdf6c1657ebd88b"],["/2019/05/12/30单元/index.html","a15c2b4a93708f5cb83db231fbd3fd56"],["/2019/06/03/jni/index.html","2e3a8d962fba7e05cc8df58bc69ecac5"],["/2019/06/07/JNA/index.html","486c8b56444242f19c7371c6ba030f1a"],["/2022/08/07/R配置jupyter/index.html","2ca2b352bf16877ac7ee66ab2223d1b6"],["/2022/08/18/FFmpeg常用命令/index.html","ab3b9398526ecf2cfcfe7f5d8c9a6d12"],["/2022/08/18/linux系统代理/index.html","2200998ce11543072c9c002ba65ba2e3"],["/2022/08/18/matplotlib补充/index.html","097cc992eca154d8e24c0b6b44f8fd6a"],["/2022/08/18/常用命令/index.html","18752ba3c2c28d5860ad8bcb5ff2f168"],["/2022/08/20/sacred/index.html","7332a6702d17f740856320d46db1cb66"],["/2022/08/20/wsl/index.html","96b02dbe916594fca5ceb0b98b917718"],["/2022/08/20/双系统安装/index.html","fa4a8a13905db5ebd762816bb8350f71"],["/2023/06/28/source/index.html","5b053a5517f4730622f7b6717e975dc7"],["/archives/2018/12/index.html","47ce11e8880208f00f9805506bb77fd1"],["/archives/2018/index.html","8a4aec12dbbbf260744315056ba5fd29"],["/archives/2019/01/index.html","3ac027e3ca53f1f665eb097cfbc36f32"],["/archives/2019/01/page/2/index.html","f520a1807710a45b9c1c519ac25f79f1"],["/archives/2019/01/page/3/index.html","50dc59c3e581157d7888c37c2a97374d"],["/archives/2019/01/page/4/index.html","846fd94ed96e6bf65af463060384a1ef"],["/archives/2019/01/page/5/index.html","c34631ab4084f49a4bb136fca32d2139"],["/archives/2019/01/page/6/index.html","6140494c25009ecb9e678e2fcb5b7a89"],["/archives/2019/01/page/7/index.html","7587b63a888d82730af4dd81954d12b5"],["/archives/2019/01/page/8/index.html","2b6d969b676c00d1cbcd2bdd92c16ef8"],["/archives/2019/01/page/9/index.html","1f44870e900c9fab7715de92873840a0"],["/archives/2019/02/index.html","b042a70aacd6be1d406384633da9ee1e"],["/archives/2019/03/index.html","61633ad5c8b29f1f072ddf073fbe6dad"],["/archives/2019/04/index.html","39a2f338b485e47d63cef83d5fa4d4c8"],["/archives/2019/05/index.html","421f2eecbfef0a93af28c380e95726f8"],["/archives/2019/06/index.html","d280453b2eef6b77c371f4d2c0f9a905"],["/archives/2019/index.html","63ecca0955879c47c65c1402147917c1"],["/archives/2019/page/10/index.html","52130e8b4915726146f547bf21008f75"],["/archives/2019/page/2/index.html","46394d1614b683e5b31e69a1d60484c0"],["/archives/2019/page/3/index.html","cb4dc978544f6cbbf22215b03563c4be"],["/archives/2019/page/4/index.html","f0501fb17de2b897dec6990e6b70ac05"],["/archives/2019/page/5/index.html","3b5d7bfdf355500944e74711711b498b"],["/archives/2019/page/6/index.html","8ecc4e201042a5c972f67dabe7913173"],["/archives/2019/page/7/index.html","3a86720d47216c787bd296b0106c606f"],["/archives/2019/page/8/index.html","d2bf29e5a7c4a0e5ee5bd21cf29e5b79"],["/archives/2019/page/9/index.html","97d528a3527cc4f08510a48e9da686f0"],["/archives/2022/08/index.html","36590b58a733697c978feef9a23fafdf"],["/archives/2022/index.html","669413b9e0bbae1dab8b25310c0259b8"],["/archives/2023/06/index.html","0245801678e922633858df28ebc86197"],["/archives/2023/index.html","00ad32e7737fd3f20c8677a558796b98"],["/archives/index.html","f9fe329ca07a25f14a21cd91eb6d4b66"],["/archives/page/10/index.html","f29d0b2f4ce1d5c47343614a6dd4f0f9"],["/archives/page/11/index.html","4fe0384dabe550a314993617c76cca63"],["/archives/page/2/index.html","764944b46ec335b7547d4fe4363a67f2"],["/archives/page/3/index.html","66e53fa8a0fbf75f2cccd3295516af1a"],["/archives/page/4/index.html","f05767050790ce9e8cebf5d3b03ccc81"],["/archives/page/5/index.html","0adc98452da1ef059c5029a6e0271180"],["/archives/page/6/index.html","ca1abd20143b45a187df4704c942ae6f"],["/archives/page/7/index.html","74547bc2f61e03a4caae90e64c1f35bb"],["/archives/page/8/index.html","2276108b594e480abee1f8470716a413"],["/archives/page/9/index.html","ab2bee1b9def790468be5c03e6a75efb"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","cfb3c6fc6c74da9b3c905b063ed276c3"],["/categories/dxz/index.html","f044960623a8c03c1ff5b10d375e3619"],["/categories/index.html","581eac20f4494caba0d6b22861d80182"],["/categories/java调用C/index.html","2b357c2250f52f619b0086af5d5da9c2"],["/categories/linux/index.html","342962d124266f394df2bfa50ac6c061"],["/categories/linux/page/2/index.html","7728190bb7552a273f7cdb1c66cea489"],["/categories/python/index.html","1af7c504f781f8c421708603e11c77f9"],["/categories/tensorflow/index.html","3a1272a2c2008282091f28377dc9344f"],["/categories/优化算法/index.html","afe975ec6855862b598de685dff5e6ac"],["/categories/图片分类/index.html","af76845d825face041ed64ef7af90eb6"],["/categories/工具/index.html","c49860faea1859e64e058314f9ab32df"],["/categories/工具/page/2/index.html","90f08c37a7d4456511df9b857835917f"],["/categories/强化学习/index.html","ea389f86d82aecf4582ca44c1104ab48"],["/categories/数据集/index.html","6aa0db09a42c9bc22808bf4d38410e28"],["/categories/日语/index.html","7392af7006c282c19e51b7ff758decd0"],["/categories/日语/page/2/index.html","4c46ef01f0a028d023990c28f342677b"],["/categories/机器学习/index.html","9ba2cbde2bcdc2402fefe3bc418dd73e"],["/categories/深度学习/index.html","7db78a013e8820ec3af0674c4efcb9b4"],["/categories/深度学习/page/2/index.html","81f16521dfe3fc4e75425b63f0eb0b8f"],["/categories/计算机视觉/index.html","0c34296e51a04752e36f5bc61ad79681"],["/categories/读书笔记/index.html","616d829816636aa49fdd7db915ae4592"],["/css/main.css","22b21fcbe9231b3b3a706990f82777e8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8f2dc58e7f79fd40299ec9f5c7aea71f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","be64ebba48be0c4691366436c08bfbf1"],["/page/11/index.html","392c4c4b510e089e80aeafd5e74f59cb"],["/page/2/index.html","244c725b02de01c9be3c036f37de6c15"],["/page/3/index.html","da588e0de0cdbbe11bf9416b4c79f102"],["/page/4/index.html","5dc479fb43d1f0799362713d1b459191"],["/page/5/index.html","4aa272334c46a9130def7d0f32492d24"],["/page/6/index.html","b95ce3dc3fa2caf01a07b0cb3c968a79"],["/page/7/index.html","b5f18eed5e95fee072926af509560fad"],["/page/8/index.html","b7a42196d1632c2df415057658785720"],["/page/9/index.html","99068d2a016e99840fb80cdabfc49ccd"],["/sw-register.js","15d1f5fff9486100aefadb37ae50b6a4"],["/tags/AlexNet/index.html","f019a3d6124d27f53d5ba93a0fafe505"],["/tags/CNN/index.html","132735aceeb587b0e0a75bf611bf38f5"],["/tags/DCGAN/index.html","75f78276e2e87b5bd5ba57aee2780c7f"],["/tags/DDPG/index.html","0418fb2e39d4f22a58f133d7d7566f73"],["/tags/DDQN/index.html","57330083aa049ef8fd5a6073af42e448"],["/tags/DQN/index.html","51c1d5c0b49b7f7b6006f72792caef78"],["/tags/GAN/index.html","3e2854efefb1e27a0799aaa8e671e166"],["/tags/IRL/index.html","22dc6438b57129ae9f0f7a8d8e5dbf30"],["/tags/LSTM/index.html","48b208ff48df3fdfeb1db7e45b293909"],["/tags/LeNet/index.html","8466074b3737ab756bf9ce7088095f20"],["/tags/MC/index.html","a836d078b68f9ea315df49f697234d32"],["/tags/PCA/index.html","05d22296265afe5be789f66481cef545"],["/tags/PG/index.html","2b83153c99af99493e5998b0aa19fe41"],["/tags/PG3/index.html","1a15f1d7862c10bf68d519f01f6764df"],["/tags/PIL/index.html","db18ed169f4801187971e5dd72941d0f"],["/tags/R/index.html","1288a471b3dd749f0d963c2eca131e04"],["/tags/RNN/index.html","3a44988c8295611157ccf5ba8639cfdd"],["/tags/SVC/index.html","fbb902abd39a78116054d24df632ac89"],["/tags/SVD/index.html","366240ff8ec310fc2ad8d85901d5759d"],["/tags/SVM/index.html","7aca703528d611a48fba18ab18c71614"],["/tags/TCP/index.html","ae6aee3e6e7d533ba7d6b48d1c47066e"],["/tags/TD/index.html","e6a5e88269fa5dd252353ce8a60a1064"],["/tags/TD3/index.html","4187e886a4d092f51cb659c8695f7134"],["/tags/VGG/index.html","93470f8d384123a9e033fc66a6154701"],["/tags/amd配置/index.html","2715dda62924002ec4752ae3384bf252"],["/tags/anconda/index.html","0e6633f9c451a26ce206ff03a734d430"],["/tags/conda常用命令/index.html","7b79b8cac01d74af98bce9b0fd2de01d"],["/tags/cuda配置/index.html","027d87e3d8656babdeff173a77eb41bb"],["/tags/docker-ldap-mysql/index.html","676c77825d819cf62f60fe230652caa9"],["/tags/docker代理/index.html","18f27c37cf168e5d6bc820cbc348c532"],["/tags/docker安装/index.html","11c15f6a8b705161dd1d45db0619c6ac"],["/tags/docker容器挂载硬盘/index.html","30c44b1ffddd54fba3973095c8be14b6"],["/tags/ffmpeg/index.html","6bbeac5383ec390d213e51dd227286c9"],["/tags/github上传代码/index.html","389a83328a8671d54904393bc2e99012"],["/tags/hexo/index.html","bae07c6c6a802b0895670654bd7b5ecc"],["/tags/index.html","45f4b56ae66087b95361cfd746384b15"],["/tags/java调用C/index.html","5a8c15c10dc92464a14f7aa09e00a916"],["/tags/kaldi/index.html","760110de56fc65e8414a656ece590047"],["/tags/linux命令/index.html","46a0d6edd565991b6e3b59523502fb0c"],["/tags/markdown/index.html","9d345422f0e9c617b29888e4d332bf60"],["/tags/matplotlib/index.html","8e51852ede1d75dc7f0f5789caf4bec8"],["/tags/numpy/index.html","9e6ba609c93bbb9c2a60a8c3b1c2e13f"],["/tags/opencv/index.html","1ee34d07160c86f033a4da3418b248b2"],["/tags/pandas/index.html","9dd477dc782d0b0ca767e5ed02e9d9e8"],["/tags/qq/index.html","1fd1da8ccb4939a7c45fe6effb050a4d"],["/tags/requests库/index.html","ac199588758a6991cee9759bf6becece"],["/tags/sacred/index.html","55ba3edea5a8d5cdbb25fa9e758b9f45"],["/tags/ssh-远程连接docker/index.html","ee6aac98c55e01e9dc1572d7d9ed9753"],["/tags/wsl/index.html","3c5837c45d6ac6316178e452833da72b"],["/tags/zsh/index.html","458870ae15f2fec7f8b12acd63140cbc"],["/tags/代理/index.html","3ed323c79db792365356440e36ec4695"],["/tags/决策树/index.html","8204d90fd7d2f4c7e52ca3d67f595074"],["/tags/函数/index.html","49a3fe8fd30a2ed179b32c878e70d0d8"],["/tags/列表推导式/index.html","c6ce6f5d3ebc1a791c3880b978df21c5"],["/tags/助词/index.html","a254c006f7fe00d1620883dbdf491647"],["/tags/包/index.html","31eac5ae3faa81dded1d08b6b1e0cc43"],["/tags/卷积神经网络/index.html","8f09ebca677aec4b953aec3ce587e34c"],["/tags/双系统安装/index.html","79febbcea4e84d4b181d5889e498167d"],["/tags/反向传播/index.html","088b878e76f2c607de8c8bff2281c087"],["/tags/句型/index.html","079804acc8c2ddfbb08ae9d9611c9ba2"],["/tags/可视化/index.html","02a21799bf89ee5f70d567c75d64ee73"],["/tags/哲学/index.html","4f274d48cdc3f27681433a4cdcb943b1"],["/tags/图像美化/index.html","b53eac767b2f8a0512fea9ad7aceb1fe"],["/tags/图床/index.html","28781694f804693d3f7eacc91307525d"],["/tags/多继承/index.html","2639f1fe799e84d69af1c3b0f889ce40"],["/tags/工具/index.html","fe1d7143cb48854a1bd61ddbf680319e"],["/tags/异常/index.html","0dba230ccec3a2f5f3e5d5c38de273bf"],["/tags/强化学习/index.html","23d720e2db60b9be1f904847cddaa22d"],["/tags/心理学/index.html","7bf475eacdd0540dfd62fd25d50c0bc2"],["/tags/感知器/index.html","4787638fb44cff0f8fbebd8ef9cbf896"],["/tags/换源/index.html","f12dea76596055275755651da0fb503f"],["/tags/描述器/index.html","4ba389818a2c8f1bad62a503050fd95e"],["/tags/敬语/index.html","9fbeaa2e8eac831588f6eb9cc1d8884b"],["/tags/数据集/index.html","cddd05b4b746f0f6fb998d756a17748d"],["/tags/文件/index.html","9327489e992ee3e6ad76958ee1e20bbe"],["/tags/服务器配置LDAP/index.html","01228d7e3746d3ca7231f520da3c919d"],["/tags/机器学习/index.html","cecf4ae9bceebefe71ae65bdaa3d4ee2"],["/tags/梯度下降/index.html","192bfe8ef9884f6e36d0c2f3e30c45bd"],["/tags/模块/index.html","d1f65241aaccaa6db33f146178c03014"],["/tags/正则/index.html","26d852695999c3e103fa33b2932ea832"],["/tags/激活函数/index.html","abbb83e26ff6ed99e51031b6cc0da9e8"],["/tags/点击预估/index.html","c1612e68488356364e0594e0331370c1"],["/tags/爬虫/index.html","e46debf9d74eae3c3ae5ba7cca3558e2"],["/tags/生成器/index.html","b86ada402d5316ea87e5df6dd5d3f7a0"],["/tags/类/index.html","c9bae7f865ea99fe2ccb6fe5e602099c"],["/tags/线性回归/index.html","42db13383dbe5f13ae85554750dc93b4"],["/tags/经济学/index.html","b55fa0b21de640761ba8da39a6585df4"],["/tags/聚类/index.html","8a36d65e015fea2b5e085145c03fb668"],["/tags/装饰器/index.html","d347ef289058fdf052c7e81234a12421"],["/tags/词型变换/index.html","37dcd5a4605196209fcd756a418bcaad"],["/tags/语义分割/index.html","279b7c6eaeda2822fe5970bea5f5a088"],["/tags/语法/index.html","29db530601aab9895b323214eab76a16"],["/tags/语法/page/2/index.html","327dd4cf6c81f1678374f0e8ad57c78d"],["/tags/迭代器/index.html","489e5a379c30b3050490e1490b57eecb"],["/tags/逻辑回归/index.html","a3496656165eeb3e157a3ec78f7e938f"],["/tags/随机森林/index.html","58a605cca888bfab67264344b36d2306"],["/tags/魔方方法/index.html","c4a235e4daf09e2d8ce2dab1a1ff4ebc"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
