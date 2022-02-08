<script>
import "../../../theme/avatar.less";
export default {
  name: "CtAvatar",
  props: {
    size: {
      type: [Number, String],
      validator(val) {
        if (typeof val === "string") {
          return ["large", "medium", "mini"].includes(val);
        }
        return typeof val === "number";
      },
    },
    shape: {
      type: String,
      default: "circle",
      validator(val) {
        return ["circle", "square"].includes(val);
      },
    },
    icon: String,
    src: String,
    alt: String,
    srcSet: String,
    error: Function,
    fit: {
      type: String,
      default: "cover",
    },
  },
  data() {
    return {
      isImageExist: true,
    };
  },
  computed: {
    avatarClass() {
      const { size, icon, shape } = this;
      let classList = ["ct-avatar"];
      if (size && typeof size === "string") {
        classList.push(`ct-avatar--${size}`);
      }
      if (icon) {
        classList.push("ct-avatar--icon");
      }
      if (shape) {
        classList.push(`ct-avatar--${shape}`);
      }
      return classList.join(" ");
    },
  },
  methods: {
    handleError() {
      const { error } = this;
      const errorFlag = error ? error() : undefined;
      if (errorFlag !== false) {
        this.isImageExist = false;
      }
    },
    renderAvatar() {
      const { icon, src, alt, isImageExist, srcSet, fit, size } = this;
      console.log(fit);
      if (isImageExist && src) {
        let imgStyle = null;
        if (typeof size === "number") {
          imgStyle = {
            width: `${size}px`,
            height: `${size}px`,
            "object-fit": `${fit}`,
          };
        } else if (size === "medium") {
          imgStyle = {
            width: "30px",
            height: "30px",
            "object-fit": `${fit}`,
          };
        } else if (size === "mini") {
          imgStyle = {
            width: "20px",
            height: "20px",
            "object-fit": `${fit}`,
          };
        } else {
          imgStyle = {
            width: "40px",
            height: "40px",
            "object-fit": `${fit}`,
          };
        }
        return (
          <img
            src={src}
            onError={this.handleError}
            alt={alt}
            srcSet={srcSet}
            style={imgStyle}
          />
        );
      }
      const iconSize =
        typeof size === "number"
          ? {
              fontSize: `${size / 2}px`,
            }
          : {};
      if (icon) {
        return <i class={"iconfont" + " " + icon} style={iconSize} />;
      }
      return <i class="iconfont icon-avatar" style={iconSize} />;
    },
  },
  render() {
    const { avatarClass, size } = this;
    const sizeStyle =
      typeof size === "number"
        ? {
            height: `${size}px`,
            width: `${size}px`,
            lineHeight: `${size}px`,
          }
        : {};
    return (
      <span class={avatarClass} style={sizeStyle}>
        {this.renderAvatar()}
      </span>
    );
  },
};
</script>