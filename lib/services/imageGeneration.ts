export const buildAnimeTransformRequestBody = (
  base64Image: string | null,
  referenceImageUrl: string | null
) => {
  return {
    input: {
      workflow: {
        "6": {
          inputs: {
            text: "A cinematic, high-drama anime scene of a character in Ufotable style. Intense lighting, dynamic motion, and a powerful, atmospheric composition.",
            clip: ["11", 0],
          },
          class_type: "CLIPTextEncode",
          _meta: {
            title: "CLIP Text Encode (Positive Prompt)",
          },
        },
        "8": {
          inputs: {
            samples: ["13", 0],
            vae: ["10", 0],
          },
          class_type: "VAEDecode",
          _meta: {
            title: "VAE Decode",
          },
        },
        "9": {
          inputs: {
            filename_prefix: "ComfyUI",
            images: ["8", 0],
          },
          class_type: "SaveImage",
          _meta: {
            title: "Save Image",
          },
        },
        "10": {
          inputs: {
            vae_name: "ae.safetensors",
          },
          class_type: "VAELoader",
          _meta: {
            title: "Load VAE",
          },
        },
        "11": {
          inputs: {
            clip_name1: "t5xxl_fp8_e4m3fn.safetensors",
            clip_name2: "clip_l.safetensors",
            type: "flux",
            device: "default",
          },
          class_type: "DualCLIPLoader",
          _meta: {
            title: "DualCLIPLoader",
          },
        },
        "12": {
          inputs: {
            unet_name: "flux1-dev.safetensors",
            weight_dtype: "fp8_e4m3fn",
          },
          class_type: "UNETLoader",
          _meta: {
            title: "Load Diffusion Model",
          },
        },
        "13": {
          inputs: {
            noise: ["25", 0],
            guider: ["22", 0],
            sampler: ["16", 0],
            sigmas: ["17", 0],
            latent_image: ["27", 0],
          },
          class_type: "SamplerCustomAdvanced",
          _meta: {
            title: "SamplerCustomAdvanced",
          },
        },
        "16": {
          inputs: {
            sampler_name: "euler",
          },
          class_type: "KSamplerSelect",
          _meta: {
            title: "KSamplerSelect",
          },
        },
        "17": {
          inputs: {
            scheduler: "beta",
            steps: 20,
            denoise: 1,
            model: ["30", 0],
          },
          class_type: "BasicScheduler",
          _meta: {
            title: "BasicScheduler",
          },
        },
        "22": {
          inputs: {
            model: ["12", 0],
            conditioning: ["49", 0],
          },
          class_type: "BasicGuider",
          _meta: {
            title: "BasicGuider",
          },
        },
        "25": {
          inputs: {
            noise_seed: Math.floor(10000 + Math.random() * 90000),
          },
          class_type: "RandomNoise",
          _meta: {
            title: "RandomNoise",
          },
        },
        "26": {
          inputs: {
            guidance: 3.5,
            conditioning: ["6", 0],
          },
          class_type: "FluxGuidance",
          _meta: {
            title: "FluxGuidance",
          },
        },
        "27": {
          inputs: {
            width: 1024,
            height: 1024,
            batch_size: 1,
          },
          class_type: "EmptySD3LatentImage",
          _meta: {
            title: "EmptySD3LatentImage",
          },
        },
        "30": {
          inputs: {
            max_shift: 1.15,
            base_shift: 0.5,
            width: 1024,
            height: 1024,
            model: ["12", 0],
          },
          class_type: "ModelSamplingFlux",
          _meta: {
            title: "ModelSamplingFlux",
          },
        },
        "38": {
          inputs: {
            clip_name: "sigclip_vision_patch14_384.safetensors",
          },
          class_type: "CLIPVisionLoader",
          _meta: {
            title: "Load CLIP Vision",
          },
        },
        "39": {
          inputs: {
            crop: "center",
            clip_vision: ["38", 0],
            image: ["52", 0],
          },
          class_type: "CLIPVisionEncode",
          _meta: {
            title: "CLIP Vision Encode",
          },
        },
        "40": {
          inputs: {
            image: "current.jpg",
            upload: "image",
          },
          class_type: "LoadImage",
          _meta: {
            title: "Load Image",
          },
        },
        "42": {
          inputs: {
            style_model_name: "flux1-redux-dev.safetensors",
          },
          class_type: "StyleModelLoader",
          _meta: {
            title: "Load Style Model",
          },
        },
        "45": {
          inputs: {
            image_strength: "medium",
            conditioning: ["26", 0],
            style_model: ["42", 0],
            clip_vision_output: ["39", 0],
          },
          class_type: "StyleModelApplySimple",
          _meta: {
            title: "StyleModelApplySimple",
          },
        },
        "49": {
          inputs: {
            image_strength: "medium",
            conditioning: ["45", 0],
            style_model: ["42", 0],
            clip_vision_output: ["50", 0],
          },
          class_type: "StyleModelApplySimple",
          _meta: {
            title: "StyleModelApplySimple",
          },
        },
        "50": {
          inputs: {
            crop: "center",
            clip_vision: ["38", 0],
            image: ["55", 0],
          },
          class_type: "CLIPVisionEncode",
          _meta: {
            title: "CLIP Vision Encode",
          },
        },
        "52": {
          inputs: {
            width: 1024,
            height: 1024,
            upscale_method: "nearest-exact",
            keep_proportion: false,
            divisible_by: 2,
            crop: "disabled",
            image: ["40", 0],
          },
          class_type: "ImageResizeKJ",
          _meta: {
            title: "Resize Image",
          },
        },
        "55": {
          inputs: {
            url: referenceImageUrl,
            cache: true,
          },
          class_type: "LoadImageByUrl //Browser",
          _meta: {
            title: "Load Image By URL",
          },
        },
      },
      images: [
        {
          name: "current.jpg",
          image: base64Image,
        },
      ],
    },
  };
};
